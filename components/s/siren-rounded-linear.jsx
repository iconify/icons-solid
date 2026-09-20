import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i1riru9bz.css';
import '../../css/f/f4rcprz7p.css';
import '../../css/y/yw2wdncae.css';
import '../../css/s/ssofjby4d.css';
import '../../css/i/i7pqdab_g.css';
import '../../css/j/j54-w6byv.css';
import '../../css/e/e-4bmobwc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i1riru9bz"/><path class="f4rcprz7p"/><path class="yw2wdncae"/><path class="ssofjby4d"/><path class="i7pqdab_g"/><path class="j54-w6byv"/><path class="e-4bmobwc"/><path class="obcs1cbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-rounded-linear"} {...others} />);
}

export default Component;
