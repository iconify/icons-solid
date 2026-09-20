import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urnxmdbcs.css';
import '../../css/n/nvkhqbcdn.css';
import '../../css/g/goc7adc_e.css';
import '../../css/z/zcjbecu6m.css';
import '../../css/z/zbpmlabxp.css';
import '../../css/f/f240ooqqr.css';
import '../../css/h/hdi520bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="urnxmdbcs"/><path class="nvkhqbcdn"/><path class="goc7adc_e"/><path class="zcjbecu6m"/><path class="zbpmlabxp"/><path clip-rule="evenodd" class="f240ooqqr"/><path clip-rule="evenodd" class="hdi520bzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-2-bold-duotone"} {...others} />);
}

export default Component;
