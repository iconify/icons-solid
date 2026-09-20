import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c6q1qmbgh.css';
import '../../css/k/kgg9pkbyg.css';
import '../../css/p/pvukpiebn.css';
import '../../css/n/nicz63n0h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="c6q1qmbgh"/><path class="kgg9pkbyg"/><path class="pvukpiebn"/><path class="nicz63n0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:text-shadow"} {...others} />);
}

export default Component;
