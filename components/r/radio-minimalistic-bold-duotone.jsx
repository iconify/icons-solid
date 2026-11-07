import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dciv8jbgc.css';
import '../../css/w/whjsmbcue.css';
import '../../css/k/k1evd3byb.css';
import '../../css/o/o7xbuy6fy.css';
import '../../css/g/gl_7i3byy.css';
import '../../css/d/dyv-s94-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dciv8jbgc"/><path class="whjsmbcue"/><path class="k1evd3byb"/><path class="o7xbuy6fy"/><path class="gl_7i3byy"/><path class="dyv-s94-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
