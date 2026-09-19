import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swosvdkra.css';
import '../../css/f/f11xt5mlf.css';
import '../../css/d/de49kbcou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="swosvdkra"/><path clip-rule="evenodd" class="f11xt5mlf"/><path class="de49kbcou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:building-library-solid"} {...others} />);
}

export default Component;
