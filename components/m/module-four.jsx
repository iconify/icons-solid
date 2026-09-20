import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exhi5mgfk.css';
import '../../css/l/lwaghdcuu.css';
import '../../css/t/tts7bccxu.css';
import '../../css/q/qsduqvxyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="exhi5mgfk"/><path class="lwaghdcuu"/><path class="tts7bccxu"/><path class="qsduqvxyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:module-four"} {...others} />);
}

export default Component;
