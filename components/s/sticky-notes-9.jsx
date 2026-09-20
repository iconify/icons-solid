import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hfojwgbgg.css';
import '../../css/l/lehnqbtlf.css';
import '../../css/w/we-rlobyj.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="hfojwgbgg"/><path class="lehnqbtlf"/><path class="we-rlobyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sticky-notes-9"} {...others} />);
}

export default Component;
