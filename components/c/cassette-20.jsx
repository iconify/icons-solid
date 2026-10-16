import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4l8cxbpg.css';
import '../../css/j/j6agt1nji.css';
import '../../css/x/x07i0sb0a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t4l8cxbpg"/><path class="j6agt1nji"/><path class="x07i0sb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cassette-20"} {...others} />);
}

export default Component;
