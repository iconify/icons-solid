import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h4h62k_ps.css';
import '../../css/r/rmwespbeq.css';
import '../../css/j/j3zlaviao.css';
import '../../css/s/sr-nnjboc.css';
import '../../css/e/e92ln96gb.css';
import '../../css/i/irgwiyhzj.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="h4h62k_ps wm-shadow"/><path class="rmwespbeq"/><path class="j3zlaviao"/><path class="sr-nnjboc"/><path class="e92ln96gb"/><path class="irgwiyhzj wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:api"} {...others} />);
}

export default Component;
