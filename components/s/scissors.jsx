import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l48-m7blu.css';
import '../../css/c/cyfn_yf1w.css';
import '../../css/a/aitpywbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="l48-m7blu"/><circle class="cyfn_yf1w"/><path class="aitpywbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:scissors"} {...others} />);
}

export default Component;
