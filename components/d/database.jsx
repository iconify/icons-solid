import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f4q24bcue.css';
import '../../css/p/ped8-delv.css';
import '../../css/v/v-k6d2bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><ellipse class="f4q24bcue"/><path class="ped8-delv"/><path class="v-k6d2bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:database"} {...others} />);
}

export default Component;
