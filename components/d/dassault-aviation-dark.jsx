import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr7l1klgz.css';
import '../../css/b/bvg9hlbgo.css';

const viewBox = {"width":1547,"height":2503};
const content = `<path class="jr7l1klgz"/><path class="bvg9hlbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dassault-aviation-dark"} {...others} />);
}

export default Component;
