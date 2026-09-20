import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dki4_xbra.css';
import '../../css/w/wyhqiodnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dki4_xbra"/><path class="wyhqiodnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:temperature-thermometer-high"} {...others} />);
}

export default Component;
