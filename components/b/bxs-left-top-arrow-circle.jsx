import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_m5s5bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_m5s5bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-left-top-arrow-circle"} {...others} />);
}

export default Component;
