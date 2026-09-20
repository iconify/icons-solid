import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elfrgac3u.css';
import '../../css/k/k_gl5ezcg.css';
import '../../css/w/wl7l9ybsl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="elfrgac3u"/><path class="k_gl5ezcg"/><path class="wl7l9ybsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bag"} {...others} />);
}

export default Component;
