import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9u6u1b0k.css';
import '../../css/x/x-crcwbkc.css';
import '../../css/x/x-1ih7_lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="e9u6u1b0k"/><path class="x-crcwbkc"/><path class="x-1ih7_lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer-reload"} {...others} />);
}

export default Component;
