import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uopsawb3r.css';
import '../../css/k/kga-j2b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uopsawb3r"/><path class="kga-j2b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-check"} {...others} />);
}

export default Component;
