import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/isus05bjz.css';
import '../../css/r/r1mklccun.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="isus05bjz"/><path class="r1mklccun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:compress-pdf"} {...others} />);
}

export default Component;
