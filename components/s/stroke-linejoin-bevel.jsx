import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9--6fbab.css';
import '../../css/m/mt-o-cafs.css';
import '../../css/a/anrq5_bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w9--6fbab"/><path class="mt-o-cafs"/><path class="anrq5_bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-linejoin-bevel"} {...others} />);
}

export default Component;
