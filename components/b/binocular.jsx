import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfk6dbcij.css';
import '../../css/t/thy5_2b8z.css';
import '../../css/y/ysc2kfs-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kfk6dbcij"/><path class="thy5_2b8z"/><path class="ysc2kfs-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:binocular"} {...others} />);
}

export default Component;
