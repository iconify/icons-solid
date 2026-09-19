import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gro-vo5gp.css';
import '../../css/y/yt3yiacyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gro-vo5gp"/><path class="yt3yiacyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:voice-to-text"} {...others} />);
}

export default Component;
