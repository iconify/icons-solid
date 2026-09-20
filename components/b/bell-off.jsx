import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjfkgwkdz.css';
import '../../css/e/e4j5lxhkv.css';
import '../../css/a/a6d48fbel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yjfkgwkdz"/><path class="e4j5lxhkv"/><path class="a6d48fbel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:bell-off"} {...others} />);
}

export default Component;
