import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ltrfubbro.css';
import '../../css/a/a7s1jvk0c.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path class="ltrfubbro"/><path class="a7s1jvk0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:neo4j"} {...others} />);
}

export default Component;
