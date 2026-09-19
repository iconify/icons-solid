import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h_p_lobgb.css';
import '../../css/h/hi5sl8bit.css';
import '../../css/f/f1hwhep2s.css';
import '../../css/z/z10i4c7ka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h_p_lobgb"/><path class="hi5sl8bit"/><path class="f1hwhep2s"/><path class="z10i4c7ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:telescope-01"} {...others} />);
}

export default Component;
