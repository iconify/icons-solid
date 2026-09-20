import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t_9i3bcru.css';
import '../../css/y/yjgpzpb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t_9i3bcru"/><path class="yjgpzpb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:music-note"} {...others} />);
}

export default Component;
