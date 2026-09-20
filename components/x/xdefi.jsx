import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1tdwcb_m.css';
import '../../css/m/m-0kq_b5b.css';
import '../../css/u/uhr3ctv0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1tdwcb_m"/><path class="m-0kq_b5b"/><path class="uhr3ctv0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xdefi"} {...others} />);
}

export default Component;
