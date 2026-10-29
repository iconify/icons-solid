import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wwrq7c6md.css';
import '../../css/l/lwxy9r3wm.css';
import '../../css/g/gn1b2waxk.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/c/clvf63btf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k wwrq7c6md"/><path class="lwxy9r3wm wm-a"/><path class="gn1b2waxk wm-shadow"/><path class="jgka1gbzk wm-k"/><path class="clvf63btf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pill-bottle-engrave"} {...others} />);
}

export default Component;
