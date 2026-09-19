import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnd46w4ky.css';
import '../../css/r/r56h83bjr.css';
import '../../css/s/showfpvwu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nnd46w4ky"><path class="r56h83bjr"/><path class="showfpvwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:advance"} {...others} />);
}

export default Component;
