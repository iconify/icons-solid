import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjs_si8ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hjs_si8ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-chevron-double-left-fill-round"} {...others} />);
}

export default Component;
