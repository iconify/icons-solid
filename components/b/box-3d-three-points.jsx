import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/we0uehbyi.css';
import '../../css/k/kpsn8jbjf.css';
import '../../css/y/yq9xunb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="we0uehbyi"/><path class="kpsn8jbjf"/><path class="yq9xunb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:box-3d-three-points"} {...others} />);
}

export default Component;
