import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ast60gb2w.css';
import '../../css/c/cfny-zd9d.css';
import '../../css/f/fbckud-nr.css';
import '../../css/x/xik3__9tl.css';
import '../../css/v/vi-a4sbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ast60gb2w"/><path class="cfny-zd9d"/><rect transform="rotate(45 6.04 29.81)scale(-1 1)" class="fbckud-nr"/><path class="xik3__9tl"/><path class="vi-a4sbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toothbrush-sparkles"} {...others} />);
}

export default Component;
