import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vqi7hhbac.css';
import '../../css/q/qi3_pf8jr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="vqi7hhbac"/><path class="qi3_pf8jr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:solar-energy"} {...others} />);
}

export default Component;
