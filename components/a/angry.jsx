import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f_362pbxn.css';
import '../../css/z/zolwr1t2h.css';
import '../../css/m/mj4zh1bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="f_362pbxn"/><path class="zolwr1t2h"/><path class="mj4zh1bkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:angry"} {...others} />);
}

export default Component;
