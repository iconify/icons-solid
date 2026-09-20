import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbi35-b1q.css';
import '../../css/f/fafky8odj.css';
import '../../css/l/lgp6ae1_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gbi35-b1q"/><path class="fafky8odj"/><path class="lgp6ae1_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:note-square-filled"} {...others} />);
}

export default Component;
