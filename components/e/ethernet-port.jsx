import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4cmhc7yi.css';
import '../../css/e/egez4ttkj.css';
import '../../css/d/d5outdbyg.css';
import '../../css/i/iey62sb4m.css';
import '../../css/w/wj60de_ov.css';
import '../../css/v/vd67ymb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x4cmhc7yi"/><path class="egez4ttkj"/><path class="d5outdbyg"/><path class="iey62sb4m"/><path class="wj60de_ov wm-shine"/><path class="vd67ymb2b wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ethernet-port"} {...others} />);
}

export default Component;
