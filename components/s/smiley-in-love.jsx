import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z58c34bia.css';
import '../../css/u/ub1bbobtx.css';
import '../../css/m/mj9wjjb6i.css';
import '../../css/l/li-ok04-v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z58c34bia"/><path class="ub1bbobtx"/><path class="mj9wjjb6i"/><path class="li-ok04-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-in-love"} {...others} />);
}

export default Component;
