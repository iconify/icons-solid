import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/i/i3j5q655c.css';
import '../../css/j/jureddast.css';

const viewBox = {"width":672,"height":193,"left":-203,"top":444};
const content = `<g class="n1mjunbsu"><path class="i3j5q655c"/><path class="jureddast"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chime-light"} {...others} />);
}

export default Component;
