import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l05nzq5tl.css';
import '../../css/q/qh73_l67m.css';
import '../../css/x/x8px_3b4l.css';
import '../../css/q/qyrsgkb6d.css';
import '../../css/u/uqaxfw2he.css';

const viewBox = {"width":522.485,"height":232.031};
const content = `<g class="d2kvgvbvc"><g class="l05nzq5tl"><path class="qh73_l67m"/><path class="x8px_3b4l"/><path class="qyrsgkb6d"/></g><path class="uqaxfw2he"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coca-cola-zero"} {...others} />);
}

export default Component;
