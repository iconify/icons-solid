import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx62bge0l.css';
import '../../css/q/q0gn3duch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fx62bge0l"/><path class="q0gn3duch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monetization-bill-magnet"} {...others} />);
}

export default Component;
