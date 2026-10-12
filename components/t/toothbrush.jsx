import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ast60gb2w.css';
import '../../css/c/cfny-zd9d.css';
import '../../css/f/fbckud-nr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ast60gb2w"/><path class="cfny-zd9d"/><rect transform="rotate(45 6.04 29.81)scale(-1 1)" class="fbckud-nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toothbrush"} {...others} />);
}

export default Component;
