import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k8lohf9dm.css';
import '../../css/o/o4f8t51le.css';
import '../../css/t/t-6e7bcfg.css';
import '../../css/i/ikf7l9fcu.css';
import '../../css/k/k3u5j3bha.css';
import '../../css/v/v_f7qacaz.css';
import '../../css/c/c54hejbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="k8lohf9dm wm-shadow"/><path class="o4f8t51le"/><path class="t-6e7bcfg"/><path class="ikf7l9fcu"/><path class="k3u5j3bha"/><path class="v_f7qacaz wm-shine"/><path class="c54hejbaa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:heart-pair"} {...others} />);
}

export default Component;
