import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/issvf4f6w.css';
import '../../css/q/qgxoqls8f.css';
import '../../css/u/u9jysnb6v.css';
import '../../css/p/p13mxbcak.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="issvf4f6w"/><path clip-rule="evenodd" class="qgxoqls8f"/><path class="u9jysnb6v"/><path class="p13mxbcak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:alien"} {...others} />);
}

export default Component;
