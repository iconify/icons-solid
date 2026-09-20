import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hb8_ulbqy.css';
import '../../css/x/xz50u3btm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hb8_ulbqy"/><path class="xz50u3btm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hierarchy-square3"} {...others} />);
}

export default Component;
