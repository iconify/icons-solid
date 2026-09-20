import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fc625cbqw.css';
import '../../css/t/tdf2ro1sx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fc625cbqw"/><path class="tdf2ro1sx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera-slash"} {...others} />);
}

export default Component;
