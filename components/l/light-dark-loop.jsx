import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx15ok.css';
import '../../css/g/g26hbu.css';
import '../../css/n/nf43cj.css';
import '../../css/y/yw4ckz.css';
import '../../css/o/o90p-m.css';
import '../../css/p/pmb9yy.css';
import '../../css/e/ea_7fd.css';
import '../../css/b/botfzx.css';
import '../../css/b/bahkgb.css';
import '../../css/c/cx-from-7_5px.css';
import '../../css/r/r-from-5_5px.css';
import '../../css/c/cy-to-9px.css';
import '../../css/c/cy-to-15px.css';
import '../../css/d/d-fif_ok.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGLccTgecA"><circle class="bx15ok g26hbu"/><circle class="nf43cj yw4ckz"/></mask><mask id="SVG9VDNEdtn"><circle class="g26hbu o90p-m"/><path class="g26hbu m-t-2q pmb9yy"/><path class="g26hbu pmb9yy twwpsx"/><path class="b582hx g26hbu pmb9yy"/><path class="e479lu g26hbu pmb9yy"/><path class="ea_7fd nf43cj"/></mask></defs><path mask="url(#SVGLccTgecA)" class="botfzx"/><path mask="url(#SVG9VDNEdtn)" class="botfzx"/><path class="bahkgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:light-dark-loop"} {...others} />);
}

export default Component;
