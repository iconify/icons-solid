import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joeh75boo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mw5qx4brw.css';
import '../../css/v/v_kf02dmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="joeh75boo secondary"/><g class="dt0cm9dhy primary"><path class="mw5qx4brw"/><path class="v_kf02dmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:game-cartridge-duo"} {...others} />);
}

export default Component;
