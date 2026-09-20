import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/v/v0dnq2b7o.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hnsc5ccym"/><circle class="p9vjoqtlo"/><circle class="p9vjoqtlo"/><circle class="v0dnq2b7o"/><circle class="fxwnb7vgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:radio-list-line"} {...others} />);
}

export default Component;
