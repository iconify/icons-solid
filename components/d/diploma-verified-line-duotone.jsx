import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/echedfx8b.css';
import '../../css/a/aw_85mb7u.css';
import '../../css/m/mwn-ncj6a.css';
import '../../css/k/kwa7-tyjx.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="echedfx8b"/><path class="aw_85mb7u"/><path class="mwn-ncj6a"/><path class="kwa7-tyjx"/><path class="a0l-fdc8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-verified-line-duotone"} {...others} />);
}

export default Component;
