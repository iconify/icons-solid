import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d7_kt5btc.css';
import '../../css/e/epac0egwa.css';
import '../../css/s/sosigtw0x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d7_kt5btc"/><path class="epac0egwa"/><path class="sosigtw0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pacman"} {...others} />);
}

export default Component;
