import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jju44hr4p.css';
import '../../css/y/ys7krcc-g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jju44hr4p"/><path class="ys7krcc-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:grid-three"} {...others} />);
}

export default Component;
