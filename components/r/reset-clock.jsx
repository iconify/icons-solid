import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mw0b19e5i.css';
import '../../css/m/m-ghaxbua.css';
import '../../css/r/rx0ie4lqa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mw0b19e5i"/><path class="m-ghaxbua"/><path class="rx0ie4lqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:reset-clock"} {...others} />);
}

export default Component;
