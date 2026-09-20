import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/q/qq7mu7b4a.css';
import '../../css/i/ippgamhud.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="qq7mu7b4a"/><path class="ippgamhud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:reset-forward"} {...others} />);
}

export default Component;
