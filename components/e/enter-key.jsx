import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/i0q8xwbhg.css';
import '../../css/m/mkm5kmzrf.css';
import '../../css/f/fd1m2zv8c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="i0q8xwbhg"/><path class="mkm5kmzrf"/><path class="fd1m2zv8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:enter-key"} {...others} />);
}

export default Component;
