import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/p/py4unwgmu.css';
import '../../css/a/aqlii8bun.css';

const viewBox = {"width":100,"height":87.197};
const content = `<g class="n1mjunbsu"><path class="py4unwgmu"/><path class="aqlii8bun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nocobase-dark"} {...others} />);
}

export default Component;
