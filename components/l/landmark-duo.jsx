import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkt4azh-d.css';
import '../../css/c/cpxddn93q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tkt4azh-d"/><path class="cpxddn93q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:landmark-duo"} {...others} />);
}

export default Component;
