import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/li5wm0lug.css';
import '../../css/y/yz97ix16s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="li5wm0lug"/><path class="yz97ix16s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:timer-10"} {...others} />);
}

export default Component;
