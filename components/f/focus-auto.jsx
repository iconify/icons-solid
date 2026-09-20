import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzkwg2b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzkwg2b2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:focus-auto"} {...others} />);
}

export default Component;
