import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/med7nebbt.css';
import '../../css/a/a8ijy1plb.css';
import '../../css/t/tpm-wl30j.css';
import '../../css/i/i590ahb1v.css';
import '../../css/x/x2vkoac2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="med7nebbt"/><path class="a8ijy1plb"/><path class="tpm-wl30j"/><path class="i590ahb1v"/><path class="x2vkoac2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-left-click-06"} {...others} />);
}

export default Component;
