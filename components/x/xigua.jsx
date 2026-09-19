import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_d73bamf.css';
import '../../css/l/l0r8j72es.css';
import '../../css/m/m40vt8b2k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y_d73bamf"><path class="l0r8j72es"/><path class="m40vt8b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:xigua"} {...others} />);
}

export default Component;
