import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thaux_dud.css';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jdpfrpyqj.css';
import '../../css/k/ktmlmgbaf.css';
import '../../css/v/vcd88bb1i.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/w/wr67agbmm.css';
import '../../css/t/t16pajb4s.css';
import '../../css/l/lgb822dme.css';
import '../../css/v/v-en5-bix.css';
import '../../css/p/pdt1ysb-x.css';

const viewBox = {"width":301,"height":211};
const content = `<defs><circle id="SVGPQAYJcvC" class="thaux_dud"/></defs><g class="bi12bsetm"><path class="jdpfrpyqj"/><path class="ktmlmgbaf"/><circle class="vcd88bb1i"/><g transform="translate(98 53)" class="n1mjunbsu"><mask id="SVGGeMimc2q"><use href="#SVGPQAYJcvC"/></mask><path mask="url(#SVGGeMimc2q)" class="wr67agbmm"/></g><path class="t16pajb4s"/><path class="lgb822dme"/><path class="v-en5-bix"/><path class="pdt1ysb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:br"} {...others} />);
}

export default Component;
