import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9e8q0brk.css';
import '../../css/w/wles-jbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e9e8q0brk"/><path class="wles-jbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle-on"} {...others} />);
}

export default Component;
