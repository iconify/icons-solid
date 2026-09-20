import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/v/vlfpssodi.css';
import '../../css/l/l0v-b4kbr.css';
import '../../css/z/z4p6v5jwg.css';
import '../../css/w/wliih4mdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i_kpawtqq"/><circle class="vlfpssodi"/><path class="l0v-b4kbr"/><circle class="z4p6v5jwg"/><path class="wliih4mdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cassette-tape"} {...others} />);
}

export default Component;
