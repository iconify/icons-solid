import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e-ud32bnc.css';
import '../../css/f/fxlk_dbbi.css';
import '../../css/f/fg1o3-nyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="e-ud32bnc"/><circle class="fxlk_dbbi"/><path class="fg1o3-nyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:music"} {...others} />);
}

export default Component;
