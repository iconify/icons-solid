import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyjug0bwc.css';
import '../../css/x/x5ekbfbiz.css';
import '../../css/i/istr6qbws.css';
import '../../css/o/o0spczbbx.css';
import '../../css/n/ng41entrh.css';
import '../../css/h/hiy0nt-5u.css';
import '../../css/c/cjx9qt99l.css';
import '../../css/t/t1jmukgrl.css';
import '../../css/r/rb1en0b3z.css';
import '../../css/i/in4wu4lxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yyjug0bwc"/><path class="x5ekbfbiz"/><path class="istr6qbws"/><path class="o0spczbbx"/><path class="ng41entrh"/><path class="hiy0nt-5u wm-shine"/><path class="cjx9qt99l"/><path class="t1jmukgrl"/><path class="rb1en0b3z"/><path class="in4wu4lxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:wifi-low"} {...others} />);
}

export default Component;
