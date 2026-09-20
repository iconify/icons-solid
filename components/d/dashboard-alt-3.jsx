import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m9x-p4bjq.css';
import '../../css/g/gl2am2rzm.css';
import '../../css/j/j1e4dtgim.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="m9x-p4bjq"/><path class="gl2am2rzm"/><path class="j1e4dtgim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:dashboard-alt-3"} {...others} />);
}

export default Component;
