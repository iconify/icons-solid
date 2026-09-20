import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z3gwjjbqz.css';
import '../../css/q/qllmk701k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z3gwjjbqz"/><path class="qllmk701k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cyborg"} {...others} />);
}

export default Component;
