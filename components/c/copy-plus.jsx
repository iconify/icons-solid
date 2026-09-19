import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rhte06buz.css';
import '../../css/c/cvi76znce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rhte06buz"/><path class="cvi76znce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:copy-plus"} {...others} />);
}

export default Component;
