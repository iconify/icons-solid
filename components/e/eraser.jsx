import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiq9z0-4j.css';
import '../../css/v/veex3ac8t.css';
import '../../css/c/czwrsbbje.css';
import '../../css/q/q760ygb7l.css';
import '../../css/o/omgw721cx.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/j/j2s-td_wa.css';
import '../../css/h/h_z6uhbfr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aiq9z0-4j"/><path class="veex3ac8t"/><path class="czwrsbbje"/><path class="q760ygb7l"/><path class="omgw721cx"/><g class="rpvb-o6bq"><path class="j2s-td_wa"/><path class="h_z6uhbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eraser"} {...others} />);
}

export default Component;
