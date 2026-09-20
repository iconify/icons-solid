import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xps_-5liz.css';
import '../../css/t/te12z0bdv.css';
import '../../css/p/p338oh64v.css';
import '../../css/n/ni0citqhu.css';
import '../../css/y/yl94dd9ar.css';
import '../../css/s/suhawis-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xps_-5liz"/><path class="te12z0bdv"/><path class="p338oh64v"/><path class="ni0citqhu"/><path class="yl94dd9ar"/><path clip-rule="evenodd" class="suhawis-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:love-duo"} {...others} />);
}

export default Component;
