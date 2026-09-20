import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l6yllhb1f.css';
import '../../css/m/mfzrz-bpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l6yllhb1f"/><path class="mfzrz-bpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:eraser"} {...others} />);
}

export default Component;
