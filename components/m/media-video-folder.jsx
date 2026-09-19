import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q-q7xubzg.css';
import '../../css/t/txuas-44k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q-q7xubzg"/><path class="txuas-44k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:media-video-folder"} {...others} />);
}

export default Component;
