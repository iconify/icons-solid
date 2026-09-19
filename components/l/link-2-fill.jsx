import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-gpmsb9n.css';
import '../../css/m/mdn6n1b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-gpmsb9n"/><path class="mdn6n1b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:link-2-fill"} {...others} />);
}

export default Component;
