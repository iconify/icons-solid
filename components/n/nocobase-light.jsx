import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py4unwgmu.css';
import '../../css/a/aqlii8bun.css';

const viewBox = {"width":100,"height":87.197};
const content = `<path class="py4unwgmu"/><path class="aqlii8bun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nocobase-light"} {...others} />);
}

export default Component;
