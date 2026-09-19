import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/orh13lboo.css';
import '../../css/o/ok7jwlf8w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="orh13lboo"/><path class="ok7jwlf8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:camera-video"} {...others} />);
}

export default Component;
