import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q74hf7f-o.css';
import '../../css/m/muiks8b-r.css';
import '../../css/h/hoiwoabqv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q74hf7f-o"/><path clip-rule="evenodd" class="muiks8b-r"/><path class="hoiwoabqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cursor-click"} {...others} />);
}

export default Component;
