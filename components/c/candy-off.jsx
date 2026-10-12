import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odc_d4b3c.css';
import '../../css/e/efwuu6bja.css';
import '../../css/s/slyt-7tjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="odc_d4b3c"/><path class="efwuu6bja"/><path class="slyt-7tjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:candy-off"} {...others} />);
}

export default Component;
