import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/al_-j1b3k.css';
import '../../css/q/qqnc45b_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="al_-j1b3k"/><path class="qqnc45b_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:video"} {...others} />);
}

export default Component;
