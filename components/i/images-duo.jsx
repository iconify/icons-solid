import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t53qi8eao.css';
import '../../css/o/oynafr2ci.css';
import '../../css/i/i64w-obuv.css';
import '../../css/x/x5xq3cbwy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="t53qi8eao"/><path class="oynafr2ci"/><path class="i64w-obuv"/><path class="x5xq3cbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-duo"} {...others} />);
}

export default Component;
