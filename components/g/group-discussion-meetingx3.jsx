import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1be3jieb.css';
import '../../css/u/us3-wsbmr.css';
import '../../css/r/rb34-bskt.css';
import '../../css/h/hlvmvz8du.css';
import '../../css/p/pxfg20ber.css';
import '../../css/x/xmkz8ybcc.css';
import '../../css/h/hhgtu7b0w.css';
import '../../css/k/kzgkcbeuo.css';
import '../../css/m/m8vbcqghj.css';
import '../../css/y/yadubgbra.css';
import '../../css/b/bu_10ccbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z1be3jieb"/><path clip-rule="evenodd" class="us3-wsbmr"/><path class="rb34-bskt"/><path clip-rule="evenodd" class="hlvmvz8du"/><path class="pxfg20ber"/><path clip-rule="evenodd" class="xmkz8ybcc"/><path class="hhgtu7b0w"/><path clip-rule="evenodd" class="kzgkcbeuo"/><path class="m8vbcqghj"/><path clip-rule="evenodd" class="yadubgbra"/><path clip-rule="evenodd" class="bu_10ccbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:group-discussion-meetingx3"} {...others} />);
}

export default Component;
