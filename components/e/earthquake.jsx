import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsf0c4bdz.css';
import '../../css/c/c1bp9hbqi.css';
import '../../css/h/h0epgfb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tsf0c4bdz"/><path class="c1bp9hbqi"/><path class="h0epgfb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earthquake"} {...others} />);
}

export default Component;
