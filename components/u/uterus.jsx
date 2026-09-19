import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/ed7n6b7iy.css';
import '../../css/c/c3fqsnlyc.css';
import '../../css/d/dgjqt8bah.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ed7n6b7iy"/><path class="c3fqsnlyc"/><path class="dgjqt8bah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:uterus"} {...others} />);
}

export default Component;
