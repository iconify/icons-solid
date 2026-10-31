import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dp-5hsb4o.css';
import '../../css/a/a0uztybii.css';
import '../../css/v/vv84ivqmt.css';
import '../../css/k/k1vu8ccyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dp-5hsb4o wm-shadow"/><path class="a0uztybii"/><path class="vv84ivqmt"/><path class="k1vu8ccyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gem"} {...others} />);
}

export default Component;
