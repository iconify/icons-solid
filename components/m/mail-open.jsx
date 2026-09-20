import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i1fj-9bbt.css';
import '../../css/s/su5nvlbjx.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="i1fj-9bbt"/><path class="su5nvlbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:mail-open"} {...others} />);
}

export default Component;
