import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxgwz42_y.css';
import '../../css/m/mbc4x5bey.css';
import '../../css/l/l2daw171n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rxgwz42_y"/><path class="mbc4x5bey"/><path clip-rule="evenodd" class="l2daw171n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sun-fog-filled"} {...others} />);
}

export default Component;
