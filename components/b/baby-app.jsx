import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fw-qztfpe.css';
import '../../css/g/ghc87ab9d.css';
import '../../css/h/h87dl697z.css';
import '../../css/u/ut_mk0iyk.css';
import '../../css/m/mxlwy4clh.css';
import '../../css/s/s57it7kcf.css';
import '../../css/m/m6_1s9bvg.css';
import '../../css/n/ntch1_bjc.css';
import '../../css/n/nrzeuolbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fw-qztfpe"/><path class="ghc87ab9d"/><circle class="h87dl697z"/><path class="ut_mk0iyk"/><path class="mxlwy4clh"/><path class="s57it7kcf"/><path class="m6_1s9bvg"/><circle class="ntch1_bjc"/><circle class="nrzeuolbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-app"} {...others} />);
}

export default Component;
