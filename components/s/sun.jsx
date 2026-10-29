import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npqnd37cj.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tlbotsbvc.css';
import '../../css/h/h_e7bgbjg.css';
import '../../css/f/f1yyvebza.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pdacp32oa.css';
import '../../css/u/u6cbxj_4i.css';
import '../../css/u/utdll8qic.css';
import '../../css/o/oohmgbc4l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGFen0LbIJ" class="npqnd37cj"/></defs><g class="t_2lkqbxb"><path class="tlbotsbvc wm-shadow"/><path class="h_e7bgbjg"/><path class="f1yyvebza"/><use href="#SVGFen0LbIJ" class="d2kvgvbvc"/><path class="pdacp32oa"/><use href="#SVGFen0LbIJ" class="d2kvgvbvc"/><path class="u6cbxj_4i"/><path class="utdll8qic wm-shine"/><path class="oohmgbc4l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sun"} {...others} />);
}

export default Component;
