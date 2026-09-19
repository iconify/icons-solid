import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q926-gbel.css';
import '../../css/s/s_bdsyxad.css';
import '../../css/i/iqbnmdmbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q926-gbel"/><path class="s_bdsyxad"/><path class="iqbnmdmbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panda"} {...others} />);
}

export default Component;
