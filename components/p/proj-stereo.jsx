import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt7l2dbgd.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="qt7l2dbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:proj-stereo"} {...others} />);
}

export default Component;
