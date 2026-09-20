import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y2c6vke3y.css';
import '../../css/w/wy5c5sban.css';
import '../../css/g/g5ab40b7r.css';
import '../../css/z/z_aisvbnh.css';
import '../../css/v/vx0j5lt2h.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="y2c6vke3y"/><path class="wy5c5sban"/><path class="g5ab40b7r"/><path class="z_aisvbnh"/><path class="vx0j5lt2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:action-cam"} {...others} />);
}

export default Component;
