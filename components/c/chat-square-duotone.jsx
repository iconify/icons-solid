import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgahfp6lw.css';
import '../../css/j/jnbwgabzh.css';
import '../../css/x/xyd6asbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wgahfp6lw"/><path clip-rule="evenodd" class="jnbwgabzh"/><path class="xyd6asbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chat-square-duotone"} {...others} />);
}

export default Component;
