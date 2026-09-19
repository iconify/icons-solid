import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r76wqnblr.css';
import '../../css/n/n65-fcc0i.css';
import '../../css/f/fe_ylwb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r76wqnblr"/><path class="n65-fcc0i"/><path class="fe_ylwb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pen-tool-add"} {...others} />);
}

export default Component;
