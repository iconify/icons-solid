import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vknkotgsv.css';
import '../../css/a/a8ywpthuc.css';
import '../../css/d/dmffg5ztk.css';
import '../../css/v/vkj5_l50a.css';
import '../../css/e/er2ivyrpj.css';
import '../../css/u/u3m701b8i.css';
import '../../css/e/e6h5hdcds.css';
import '../../css/g/gce57qb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vknkotgsv wm-shadow"/><path class="a8ywpthuc"/><path class="dmffg5ztk"/><path class="vkj5_l50a"/><path class="er2ivyrpj"/><path class="u3m701b8i"/><path class="e6h5hdcds"/><path class="gce57qb8n wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:route"} {...others} />);
}

export default Component;
