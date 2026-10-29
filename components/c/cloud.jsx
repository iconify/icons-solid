import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbmddccto.css';
import '../../css/z/zhzrz9bbu.css';
import '../../css/a/a1itn7xck.css';
import '../../css/a/avekkmbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbmddccto wm-k"/><path class="wm-k zhzrz9bbu"/><path class="a1itn7xck wm-k"/><path class="avekkmbwq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud"} {...others} />);
}

export default Component;
