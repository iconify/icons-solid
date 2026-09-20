import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-pdklb8p.css';
import '../../css/e/edqbqfb3b.css';
import '../../css/d/db90vmbne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e-pdklb8p"/><path clip-rule="evenodd" class="edqbqfb3b"/><path clip-rule="evenodd" class="db90vmbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hot-spring-flat"} {...others} />);
}

export default Component;
