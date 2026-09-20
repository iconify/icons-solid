import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr_o6v23v.css';
import '../../css/f/f8bre-hrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xr_o6v23v"/><path class="f8bre-hrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:temperature-thermometer-medium"} {...others} />);
}

export default Component;
