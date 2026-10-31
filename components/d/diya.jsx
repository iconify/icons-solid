import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/brvvkkb0y.css';
import '../../css/j/j27bccblr.css';
import '../../css/m/mqy27tbgb.css';
import '../../css/q/q-vbo8b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="brvvkkb0y wm-shadow"/><path class="j27bccblr wm-shadow"/><path class="mqy27tbgb"/><path class="q-vbo8b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:diya"} {...others} />);
}

export default Component;
