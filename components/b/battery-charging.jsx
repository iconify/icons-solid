import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ruhzymp4n.css';
import '../../css/c/cswty6bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ruhzymp4n"/><path class="cswty6bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:battery-charging"} {...others} />);
}

export default Component;
