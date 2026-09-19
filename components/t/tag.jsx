import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l0_m7cbau.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="7.25 14.25 1.75 8.75 8.75 1.75 14.25 1.75 14.25 7.25"/><circle class="l0_m7cbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:tag"} {...others} />);
}

export default Component;
