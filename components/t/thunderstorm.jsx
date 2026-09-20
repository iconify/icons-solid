import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/u/ufpt_9jsx.css';
import '../../css/l/lxsk-fw5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="ufpt_9jsx"/><path class="lxsk-fw5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:thunderstorm"} {...others} />);
}

export default Component;
