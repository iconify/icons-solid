import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qncki40xj.css';
import '../../css/h/hdwe806as.css';
import '../../css/p/pdpacf2rz.css';
import '../../css/n/n_fnwkbmt.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qncki40xj"/><path class="hdwe806as"/><path class="pdpacf2rz wm-k"/><path class="n_fnwkbmt wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:christmas-tree"} {...others} />);
}

export default Component;
