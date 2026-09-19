import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/ww_z5ccnr.css';
import '../../css/q/qoibz8b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ww_z5ccnr"/><path class="qoibz8b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rain-double-drop"} {...others} />);
}

export default Component;
