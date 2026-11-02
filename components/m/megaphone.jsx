import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vn2nlzbau.css';
import '../../css/m/mx1-ogvaj.css';
import '../../css/j/jx1a0rbwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="vn2nlzbau"/><path class="mx1-ogvaj"/><path class="jx1a0rbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:megaphone"} {...others} />);
}

export default Component;
