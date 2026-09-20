import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kemygabdc.css';
import '../../css/n/n8nrz1l5r.css';
import '../../css/p/ptztw3boi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kemygabdc"/><path class="n8nrz1l5r"/><path class="ptztw3boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:erlenmeyer-flask"} {...others} />);
}

export default Component;
