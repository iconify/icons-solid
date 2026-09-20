import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vlrs3_buq.css';
import '../../css/m/mm_ycbb5m.css';
import '../../css/c/cyc_5oaic.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vlrs3_buq"/><path class="mm_ycbb5m"/><path class="cyc_5oaic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:visual-blind-1"} {...others} />);
}

export default Component;
