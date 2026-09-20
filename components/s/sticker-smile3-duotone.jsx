import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjhh4lb5v.css';
import '../../css/n/nv0a6sb0g.css';
import '../../css/a/axjypzbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wjhh4lb5v"/><path class="nv0a6sb0g"/><path class="axjypzbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sticker-smile3-duotone"} {...others} />);
}

export default Component;
