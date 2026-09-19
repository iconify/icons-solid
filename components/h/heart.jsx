import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t0u0fdctw.css';
import '../../css/e/e8fou4b1p.css';
import '../../css/q/q02acs62u.css';
import '../../css/t/twa_7s9jq.css';
import '../../css/e/eyby592po.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="t0u0fdctw"/><path class="e8fou4b1p"/><path class="q02acs62u"/><path clip-rule="evenodd" class="twa_7s9jq"/><path class="eyby592po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:heart"} {...others} />);
}

export default Component;
