import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywh0hlb_n.css';
import '../../css/y/yi6hbibel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywh0hlb_n"/><path class="yi6hbibel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-play"} {...others} />);
}

export default Component;
