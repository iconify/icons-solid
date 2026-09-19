import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrttuebta.css';
import '../../css/x/xu--epbdn.css';
import '../../css/p/pbxt5obiw.css';
import '../../css/t/t-cn-6bbb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nrttuebta"/><path class="xu--epbdn"/><rect transform="matrix(1 0 0 -1 37 64)" class="pbxt5obiw"/><rect transform="matrix(1 0 0 -1 37 40)" class="t-cn-6bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-size-up-1"} {...others} />);
}

export default Component;
