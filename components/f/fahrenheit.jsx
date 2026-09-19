import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xom7hneoz.css';
import '../../css/f/f0zl8hbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="xom7hneoz"/><path class="f0zl8hbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fahrenheit"} {...others} />);
}

export default Component;
