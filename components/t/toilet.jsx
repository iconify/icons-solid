import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fqt00wfud.css';
import '../../css/z/zg5n0-bns.css';
import '../../css/p/pv42_gb1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fqt00wfud"/><path class="zg5n0-bns"/><path class="pv42_gb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:toilet"} {...others} />);
}

export default Component;
