import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyg886bxh.css';
import '../../css/u/u6equw4su.css';
import '../../css/e/e68b-ibdw.css';
import '../../css/u/u8xvxoo7n.css';
import '../../css/y/ysjr4s0bv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zyg886bxh"/><path class="u6equw4su"/><path clip-rule="evenodd" class="e68b-ibdw"/><path class="u8xvxoo7n"/><path class="ysjr4s0bv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crop-1-bold"} {...others} />);
}

export default Component;
