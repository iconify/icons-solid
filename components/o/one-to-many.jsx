import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rg_xgzhfl.css';
import '../../css/l/l5tcc9b-l.css';
import '../../css/y/ya-s0pbbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rg_xgzhfl"/><path class="l5tcc9b-l"/><path class="ya-s0pbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:one-to-many"} {...others} />);
}

export default Component;
