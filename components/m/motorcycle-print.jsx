import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwiz1tvey.css';
import '../../css/y/ywc8e_beb.css';
import '../../css/z/zsopgk3nh.css';
import '../../css/v/vgg3nib1c.css';
import '../../css/e/e3-z2nbly.css';
import '../../css/q/qkiwevqva.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xwiz1tvey"/><path class="ywc8e_beb"/><path clip-rule="evenodd" class="zsopgk3nh"/><path class="vgg3nib1c"/><path class="e3-z2nbly"/><path clip-rule="evenodd" class="qkiwevqva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:motorcycle-print"} {...others} />);
}

export default Component;
