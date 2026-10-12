import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm13-txuu.css';
import '../../css/d/dhdywzrps.css';
import '../../css/l/lo-76q32a.css';
import '../../css/h/hfkbjdban.css';
import '../../css/c/c3xvfibhp.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gm13-txuu"/><path class="dhdywzrps"/><path class="lo-76q32a"/><path class="hfkbjdban"/><path class="c3xvfibhp"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-alert-48-bold"} {...others} />);
}

export default Component;
