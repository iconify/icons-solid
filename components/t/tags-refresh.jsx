import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uqsr-lbmt.css';
import '../../css/v/vrp9m6m5s.css';
import '../../css/v/v5pzxzbfc.css';
import '../../css/w/wr1psg-gd.css';
import '../../css/y/yd-nrct1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uqsr-lbmt"/><path class="vrp9m6m5s"/><path class="v5pzxzbfc"/><path class="wr1psg-gd"/><path class="yd-nrct1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tags-refresh"} {...others} />);
}

export default Component;
