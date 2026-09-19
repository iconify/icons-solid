import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aw79_wdne.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="aw79_wdne"/><line x1="1.75" x2="10.25" y1="2.25" y2="14.25"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:camera-video-slash"} {...others} />);
}

export default Component;
