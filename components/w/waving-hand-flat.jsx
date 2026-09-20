import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdghbwq-l.css';
import '../../css/l/lzwn5octs.css';
import '../../css/s/s-ti6ntpp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mdghbwq-l"/><path class="lzwn5octs"/><path class="s-ti6ntpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:waving-hand-flat"} {...others} />);
}

export default Component;
