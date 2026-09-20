import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ut75nwbbk.css';
import '../../css/w/wles-jbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ut75nwbbk"/><path class="wles-jbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle-off"} {...others} />);
}

export default Component;
