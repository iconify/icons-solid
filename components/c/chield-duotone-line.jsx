import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/t/tcdfmzher.css';
import '../../css/a/almsit-4x.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ese8babqc.css';
import '../../css/i/ipdr_abfn.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGrX5MMegh" width="18" height="20" x="3" y="1" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="tcdfmzher"/><path class="almsit-4x"/></mask><g class="ft5dv1b6b"><path class="ese8babqc"/><path mask="url(#SVGrX5MMegh)" class="ipdr_abfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chield-duotone-line"} {...others} />);
}

export default Component;
