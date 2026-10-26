import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w8stknbrb.css';
import '../../css/q/qww7ufbwy.css';
import '../../css/f/fiiaz4b4w.css';
import '../../css/q/q87nvackg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="w8stknbrb"/><path class="qww7ufbwy"/><path class="fiiaz4b4w"/><path class="q87nvackg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:corn"} {...others} />);
}

export default Component;
