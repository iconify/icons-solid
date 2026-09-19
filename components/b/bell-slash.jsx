import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i-50d2biz.css';
import '../../css/s/sdp6-tbwn.css';
import '../../css/t/t4o8ctohm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="i-50d2biz"/><path class="sdp6-tbwn"/><path class="i-50d2biz"/><path class="t4o8ctohm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:bell-slash"} {...others} />);
}

export default Component;
