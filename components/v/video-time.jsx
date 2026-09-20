import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuc5c_btk.css';
import '../../css/j/jmdah2bcp.css';
import '../../css/v/v-ajdhbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kuc5c_btk"/><path class="jmdah2bcp"/><path class="v-ajdhbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-time"} {...others} />);
}

export default Component;
