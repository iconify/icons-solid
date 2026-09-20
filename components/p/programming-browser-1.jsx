import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/leth6321y.css';
import '../../css/s/sx6aeq7ul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="leth6321y"/><path class="sx6aeq7ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-browser-1"} {...others} />);
}

export default Component;
