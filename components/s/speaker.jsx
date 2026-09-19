import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icn6_doub.css';
import '../../css/c/cq2rbsbcp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="icn6_doub"/><path class="cq2rbsbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:speaker"} {...others} />);
}

export default Component;
