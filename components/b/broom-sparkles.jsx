import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ickw8wruz.css';
import '../../css/g/g51gcibqe.css';
import '../../css/n/n4b98qw6q.css';
import '../../css/h/hwj8q4bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ickw8wruz"/><path class="g51gcibqe"/><path class="n4b98qw6q"/><path class="hwj8q4bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:broom-sparkles"} {...others} />);
}

export default Component;
