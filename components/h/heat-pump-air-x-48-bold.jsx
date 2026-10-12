import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm13-txuu.css';
import '../../css/d/dhdywzrps.css';
import '../../css/l/lo-76q32a.css';
import '../../css/h/hfkbjdban.css';
import '../../css/c/c3xvfibhp.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/i/iuv5z4b4l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gm13-txuu"/><path class="dhdywzrps"/><path class="lo-76q32a"/><path class="hfkbjdban"/><path class="c3xvfibhp"/><path class="sfb8rqn9v"/><path class="iuv5z4b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-x-48-bold"} {...others} />);
}

export default Component;
