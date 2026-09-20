import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np_3uwb3h.css';
import '../../css/y/y7wm307so.css';
import '../../css/p/pwa13k8ww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="np_3uwb3h"/><circle class="y7wm307so"/><path class="pwa13k8ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gaming-buttons-filled"} {...others} />);
}

export default Component;
