import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/x/xciy_gj5s.css';
import '../../css/p/pk3e8jb4d.css';
import '../../css/h/ha3-co41s.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="xciy_gj5s"/><path class="pk3e8jb4d"/><path class="ha3-co41s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:angular-light"} {...others} />);
}

export default Component;
