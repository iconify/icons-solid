import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yil1v_65z.css';
import '../../css/a/a6in9ff6w.css';
import '../../css/r/rpg611bjx.css';
import '../../css/x/xopp2ebdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yil1v_65z"/><path class="a6in9ff6w"/><path class="rpg611bjx"/><path clip-rule="evenodd" class="xopp2ebdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router3-filled"} {...others} />);
}

export default Component;
