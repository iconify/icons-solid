import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cke6vwbrd.css';
import '../../css/k/kbp6v8_4a.css';
import '../../css/w/w3q6r8btx.css';
import '../../css/i/i8t5fzqma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cke6vwbrd"/><path class="kbp6v8_4a"/><path class="w3q6r8btx"/><path class="i8t5fzqma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:money-coin-cash"} {...others} />);
}

export default Component;
