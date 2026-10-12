import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yedt1ug9b.css';
import '../../css/h/hyo-aabqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yedt1ug9b"/><path class="hyo-aabqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:send-filled"} {...others} />);
}

export default Component;
