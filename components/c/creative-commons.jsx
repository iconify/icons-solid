import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uny6rsjdx.css';
import '../../css/f/fi8-0bc-r.css';
import '../../css/h/h_1w3bl5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uny6rsjdx"/><path class="fi8-0bc-r"/><path class="h_1w3bl5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:creative-commons"} {...others} />);
}

export default Component;
