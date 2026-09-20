import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/s/s_1kjkbfy.css';
import '../../css/s/sjszqzyyg.css';
import '../../css/l/lgu-qkbjy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="s_1kjkbfy"/><path class="sjszqzyyg"/><path class="lgu-qkbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:inbox-content"} {...others} />);
}

export default Component;
