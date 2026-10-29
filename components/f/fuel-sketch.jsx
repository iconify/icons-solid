import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/juj-yyb3h.css';
import '../../css/r/ryv0a7boy.css';
import '../../css/d/drhbokbsz.css';
import '../../css/n/nu6fsptef.css';
import '../../css/c/ci-xzcbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="juj-yyb3h"/><path class="ryv0a7boy wm-k"/><path class="drhbokbsz wm-a"/><path class="nu6fsptef wm-k"/><path class="ci-xzcbit wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fuel-sketch"} {...others} />);
}

export default Component;
