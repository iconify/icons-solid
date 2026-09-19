import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rzkc8ryte.css';
import '../../css/k/kz0i04bhk.css';
import '../../css/f/fif1ehbkk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="rzkc8ryte"/><path class="kz0i04bhk"/><path class="fif1ehbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ship"} {...others} />);
}

export default Component;
