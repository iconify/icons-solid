import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m-b7e3zwk.css';
import '../../css/e/e56bymb3k.css';
import '../../css/q/q-vhqqbso.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="m-b7e3zwk"/><path class="e56bymb3k"/><path class="q-vhqqbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stroller"} {...others} />);
}

export default Component;
