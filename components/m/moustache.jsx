import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s4v7vibmb.css';
import '../../css/p/pkqrh8car.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="s4v7vibmb"/><path class="pkqrh8car"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:moustache"} {...others} />);
}

export default Component;
