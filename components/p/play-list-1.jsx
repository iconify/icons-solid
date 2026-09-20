import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/s/syp7_ufmy.css';
import '../../css/k/kjxsrjlhw.css';
import '../../css/u/u_dlxcmla.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="syp7_ufmy"/><path class="kjxsrjlhw"/><path class="u_dlxcmla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:play-list-1"} {...others} />);
}

export default Component;
