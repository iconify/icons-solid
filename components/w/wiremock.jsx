import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/br5degbtq.css';
import '../../css/z/zuoyr6bmv.css';
import '../../css/a/aliox97ep.css';
import '../../css/t/t8vmfzbel.css';
import '../../css/s/skpptobss.css';
import '../../css/w/wnghhcbax.css';
import '../../css/v/v-erp-5cu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="br5degbtq"/><path class="zuoyr6bmv"/><path class="aliox97ep"/><path class="t8vmfzbel"/><path class="skpptobss"/><path class="wnghhcbax"/><path class="v-erp-5cu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wiremock"} {...others} />);
}

export default Component;
