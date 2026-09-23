import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zye0l-oxa.css';
import '../../css/y/ydrsn1buc.css';
import '../../css/w/wp3kf0bjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zye0l-oxa"/><path class="ydrsn1buc"/><path class="wp3kf0bjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-start-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
