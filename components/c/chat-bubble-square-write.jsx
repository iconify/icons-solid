import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sexj4ompm.css';
import '../../css/k/k4paa-43g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sexj4ompm"/><path class="k4paa-43g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chat-bubble-square-write"} {...others} />);
}

export default Component;
