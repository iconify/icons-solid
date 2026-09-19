import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lmgk-_5ll.css';
import '../../css/j/j6togjb9b.css';
import '../../css/v/v8x0izeuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lmgk-_5ll"/><path class="j6togjb9b"/><path class="v8x0izeuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workout-stretching"} {...others} />);
}

export default Component;
