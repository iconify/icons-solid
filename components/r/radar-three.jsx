import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jjtab5g6w.css';
import '../../css/t/tv-vqab4x.css';
import '../../css/g/g4-f7hwxf.css';
import '../../css/t/tqb_6nb6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jjtab5g6w"/><path class="tv-vqab4x"/><path class="g4-f7hwxf"/><circle class="tqb_6nb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radar-three"} {...others} />);
}

export default Component;
