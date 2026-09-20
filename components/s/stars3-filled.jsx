import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj-xrub6u.css';
import '../../css/c/cybvnbcqt.css';
import '../../css/h/hu4sy94_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fj-xrub6u"/><path clip-rule="evenodd" class="cybvnbcqt"/><path class="hu4sy94_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stars3-filled"} {...others} />);
}

export default Component;
