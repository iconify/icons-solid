import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/t/tv92lqy5r.css';
import '../../css/f/f4v228b-b.css';

const viewBox = {"width":256,"height":256};
const content = `<g clip-rule="evenodd" class="nx5d-bc1s"><path class="tv92lqy5r"/><path class="f4v228b-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unreal-engine-dark"} {...others} />);
}

export default Component;
