import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sffl1tu2o.css';
import '../../css/t/t0wit_bey.css';
import '../../css/v/vcnfm5cjz.css';
import '../../css/f/fyqmx_55y.css';
import '../../css/f/f-q6sumxn.css';
import '../../css/z/zmbel_eru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sffl1tu2o wm-shadow"/><path class="t0wit_bey"/><path class="vcnfm5cjz"/><path class="fyqmx_55y"/><path class="f-q6sumxn wm-shine"/><path class="wm-deco zmbel_eru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-right"} {...others} />);
}

export default Component;
