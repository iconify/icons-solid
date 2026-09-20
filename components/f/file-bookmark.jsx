import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/imgqpgy8k.css';
import '../../css/z/zo_6x2nho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="imgqpgy8k"/><path class="zo_6x2nho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:file-bookmark"} {...others} />);
}

export default Component;
