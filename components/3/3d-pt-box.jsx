import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o3ypcii6p.css';
import '../../css/k/kpsn8jbjf.css';
import '../../css/y/yq9xunb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o3ypcii6p"/><path class="kpsn8jbjf"/><path class="yq9xunb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:3d-pt-box"} {...others} />);
}

export default Component;
