import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag31uv8-s.css';
import '../../css/n/nlpbp5but.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ag31uv8-s"/><path class="nlpbp5but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screwdriver-20-bold"} {...others} />);
}

export default Component;
