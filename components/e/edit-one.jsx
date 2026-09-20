import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fjr4614nr.css';
import '../../css/j/j3mqxpbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fjr4614nr"/><path class="j3mqxpbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:edit-one"} {...others} />);
}

export default Component;
