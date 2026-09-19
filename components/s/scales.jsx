import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx686cbeq.css';
import '../../css/i/ibvamdbhn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="dx686cbeq"/><path class="ibvamdbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:scales"} {...others} />);
}

export default Component;
