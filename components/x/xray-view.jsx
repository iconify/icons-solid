import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kpsn8jbjf.css';
import '../../css/l/lime6d1va.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kpsn8jbjf"/><path class="lime6d1va"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:xray-view"} {...others} />);
}

export default Component;
