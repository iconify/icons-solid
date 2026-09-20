import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gt80c_bza.css';
import '../../css/j/jmkpfkytf.css';
import '../../css/w/wr5q1e3do.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gt80c_bza"/><path class="jmkpfkytf"/><path class="wr5q1e3do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crosshairs-slash-filled"} {...others} />);
}

export default Component;
