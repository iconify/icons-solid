import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_kcw3bme.css';
import '../../css/w/wwc-vlvua.css';
import '../../css/q/qt4fsrbfi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_kcw3bme"/><path class="wwc-vlvua"/><path class="qt4fsrbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-boiler-48"} {...others} />);
}

export default Component;
