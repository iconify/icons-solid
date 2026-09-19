import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f1wfu4_qk.css';
import '../../css/y/y2m5b7byp.css';
import '../../css/k/krjghjbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="f1wfu4_qk"/><rect class="y2m5b7byp"/><path class="krjghjbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:milk-outline"} {...others} />);
}

export default Component;
