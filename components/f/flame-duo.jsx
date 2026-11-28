import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frtq6fbtd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fwi20wbqk.css';
import '../../css/l/l177jbcau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frtq6fbtd secondary"/><g class="dt0cm9dhy primary"><path class="fwi20wbqk"/><path class="l177jbcau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flame-duo"} {...others} />);
}

export default Component;
