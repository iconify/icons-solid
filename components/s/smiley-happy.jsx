import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evzxtvk0v.css';
import '../../css/p/p2wm08ihw.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/v/vprexkb0f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="evzxtvk0v"/><path class="p2wm08ihw"/><path class="xjfc-xbtr"/><path class="vprexkb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-happy"} {...others} />);
}

export default Component;
