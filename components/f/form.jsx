import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6tnqybwa.css';
import '../../css/s/slvhe0bzk.css';
import '../../css/n/n37fugbbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.05 10.2)" class="x6tnqybwa"/><rect transform="matrix(0 -1 -1 0 21.05 22.12)" class="x6tnqybwa"/><path class="slvhe0bzk"/><rect transform="matrix(0 -1 -1 0 21.05 10.2)" class="n37fugbbv"/><rect transform="matrix(0 -1 -1 0 21.05 22.12)" class="n37fugbbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:form"} {...others} />);
}

export default Component;
