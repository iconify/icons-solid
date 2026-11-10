import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecmac5bwr.css';
import '../../css/z/z_u6i1llf.css';
import '../../css/m/mwe5ntbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ecmac5bwr"/><path class="z_u6i1llf"/><path class="mwe5ntbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:handbag"} {...others} />);
}

export default Component;
