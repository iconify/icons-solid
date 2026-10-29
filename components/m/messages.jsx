import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yp_-ip9ex.css';
import '../../css/l/lr8hqq_vi.css';
import '../../css/f/fx7ye8ciw.css';
import '../../css/k/k8h3py5ya.css';
import '../../css/o/ov5q5t8lp.css';
import '../../css/h/h5zzq6bng.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yp_-ip9ex"/><path class="lr8hqq_vi"/><path class="fx7ye8ciw"/><path class="k8h3py5ya"/><path class="ov5q5t8lp"/><path class="h5zzq6bng wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:messages"} {...others} />);
}

export default Component;
