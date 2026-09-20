import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/of-8ljb3p.css';
import '../../css/e/ed332-b0a.css';
import '../../css/b/bb-e3mbpr.css';
import '../../css/q/qe5vdnbmc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="of-8ljb3p"/><path class="ed332-b0a"/><path class="bb-e3mbpr"/><path class="qe5vdnbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-sticker-square"} {...others} />);
}

export default Component;
