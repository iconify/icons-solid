import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gmj017svh.css';
import '../../css/x/xck8kdj3v.css';
import '../../css/p/p81j7dbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gmj017svh"/><path class="wm-a xck8kdj3v"/><path class="p81j7dbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chess-duo"} {...others} />);
}

export default Component;
