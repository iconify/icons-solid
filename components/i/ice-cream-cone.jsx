import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/djr7vwbwa.css';
import '../../css/g/ge8ychw1v.css';
import '../../css/r/r6om_5jhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="djr7vwbwa"/><path class="ge8ychw1v"/><path class="r6om_5jhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ice-cream-cone"} {...others} />);
}

export default Component;
