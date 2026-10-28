import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie8cyuwin.css';
import '../../css/l/lwph_1yqb.css';
import '../../css/r/rgylxr1_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ie8cyuwin"/><path class="lwph_1yqb"/><path class="rgylxr1_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-vnd-circle"} {...others} />);
}

export default Component;
