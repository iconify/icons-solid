import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/a/av-jj2dnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t8a26skit"/><path class="av-jj2dnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-player-movie"} {...others} />);
}

export default Component;
