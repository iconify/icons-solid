import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rh2_8ff0f.css';
import '../../css/v/v3lx4ccvi.css';
import '../../css/i/i2dqh5byv.css';
import '../../css/j/ji9msevfp.css';
import '../../css/p/pqs8-mbam.css';
import '../../css/h/hswe6fdlj.css';
import '../../css/l/lc0eq4bdb.css';
import '../../css/h/hc9c2dbdm.css';
import '../../css/e/e57ubzbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rh2_8ff0f wm-shadow"/><path class="v3lx4ccvi"/><path class="i2dqh5byv"/><path class="ji9msevfp"/><path class="pqs8-mbam"/><path class="hswe6fdlj"/><path class="lc0eq4bdb"/><path class="hc9c2dbdm wm-shine"/><path class="e57ubzbyo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:trophy"} {...others} />);
}

export default Component;
