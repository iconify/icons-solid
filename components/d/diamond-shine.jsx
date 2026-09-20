import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/g/g-ojnghyf.css';
import '../../css/c/cdfn9gb5o.css';
import '../../css/t/t_jy4ubgr.css';
import '../../css/w/wgqzshgfj.css';
import '../../css/t/tbpd1xb_o.css';
import '../../css/n/nlzdiphyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="g-ojnghyf"/><path class="cdfn9gb5o"/><path class="t_jy4ubgr"/><path class="wgqzshgfj"/><path class="tbpd1xb_o"/><path class="nlzdiphyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:diamond-shine"} {...others} />);
}

export default Component;
