import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fpxz6_btx.css';
import '../../css/g/gc4sfh2ej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fpxz6_btx"/><path class="gc4sfh2ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:safari"} {...others} />);
}

export default Component;
