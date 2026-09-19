import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yl3ib2b4t.css';
import '../../css/d/dj__7_bov.css';
import '../../css/h/h7tnjtbgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="yl3ib2b4t"/><path class="dj__7_bov"/><path class="h7tnjtbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:home"} {...others} />);
}

export default Component;
