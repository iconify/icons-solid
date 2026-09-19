import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cmb79xb_o.css';
import '../../css/k/kpsn8jbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cmb79xb_o"/><path class="kpsn8jbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:3d-select-point"} {...others} />);
}

export default Component;
