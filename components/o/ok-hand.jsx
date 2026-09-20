import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yij8m4b-a.css';
import '../../css/h/hurilw_2h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yij8m4b-a"/><path class="hurilw_2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ok-hand"} {...others} />);
}

export default Component;
