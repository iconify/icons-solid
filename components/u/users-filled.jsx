import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4k2nwwaz.css';
import '../../css/o/ouzepdbve.css';
import '../../css/h/hbxrwe5kr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="l4k2nwwaz"/><ellipse class="ouzepdbve"/><path class="hbxrwe5kr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users-filled"} {...others} />);
}

export default Component;
