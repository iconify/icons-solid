import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jfd2ogbga.css';
import '../../css/d/d0l02ib-x.css';
import '../../css/q/qia54zbrp.css';
import '../../css/k/k09kzac_t.css';
import '../../css/g/g49h-5lyb.css';
import '../../css/h/htloyjbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jfd2ogbga wm-shadow"/><path class="d0l02ib-x"/><path class="qia54zbrp"/><path class="k09kzac_t"/><path class="g49h-5lyb wm-shine"/><path class="htloyjbpv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:maximize-2"} {...others} />);
}

export default Component;
