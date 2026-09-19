import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu20nsb-w.css';
import '../../css/h/h220zcbfh.css';
import '../../css/e/e_4x7sb2e.css';
import '../../css/i/iql33bbkv.css';
import '../../css/o/ow275bckj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xu20nsb-w"/><path class="h220zcbfh"/><path class="e_4x7sb2e"/><path clip-rule="evenodd" class="iql33bbkv"/><path class="ow275bckj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:plug"} {...others} />);
}

export default Component;
