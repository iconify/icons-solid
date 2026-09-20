import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h82b1rbbs.css';
import '../../css/u/uiavp4bsc.css';
import '../../css/v/v-jeemisx.css';
import '../../css/v/v3cnboeqh.css';
import '../../css/d/dpet-3ytm.css';
import '../../css/f/fbb9ygbqw.css';
import '../../css/t/thyob_boj.css';
import '../../css/o/o01pic_1k.css';
import '../../css/o/o99mn32cy.css';
import '../../css/n/nf7gqdgtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h82b1rbbs"/><path class="uiavp4bsc"/><path class="v-jeemisx"/><path class="v3cnboeqh"/><path class="dpet-3ytm"/><path class="fbb9ygbqw"/><path class="thyob_boj"/><path class="o01pic_1k"/><path class="o99mn32cy"/><path class="nf7gqdgtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:drawer-envelope"} {...others} />);
}

export default Component;
