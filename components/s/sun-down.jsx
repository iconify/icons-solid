import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb9m1rbgm.css';
import '../../css/i/i-b5_50xk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tb9m1rbgm"/><path class="i-b5_50xk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun-down"} {...others} />);
}

export default Component;
