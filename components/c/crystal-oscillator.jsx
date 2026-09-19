import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmsca0q7w.css';
import '../../css/f/fsonjcf5w.css';
import '../../css/q/qpqzmgbts.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dmsca0q7w"/><path class="fsonjcf5w"/><path class="qpqzmgbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:crystal-oscillator"} {...others} />);
}

export default Component;
