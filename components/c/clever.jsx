import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgxjedc_k.css';
import '../../css/s/s9z829grf.css';
import '../../css/m/mx8b_jb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rgxjedc_k"/><path class="s9z829grf"/><path class="mx8b_jb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clever"} {...others} />);
}

export default Component;
