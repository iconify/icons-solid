import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewk5jvbls.css';
import '../../css/h/hok5llblz.css';
import '../../css/d/d3a09urjs.css';

const viewBox = {"width":256,"height":226};
const content = `<path class="ewk5jvbls"/><path class="hok5llblz"/><path class="d3a09urjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:netlify"} {...others} />);
}

export default Component;
