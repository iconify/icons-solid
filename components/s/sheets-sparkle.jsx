import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5q97tbfj.css';
import '../../css/x/xnbmmdbfm.css';
import '../../css/g/g9qxn4b9s.css';
import '../../css/n/n0g83u1ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i5q97tbfj"/><path class="xnbmmdbfm"/><path class="g9qxn4b9s"/><path class="n0g83u1ki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sheets-sparkle"} {...others} />);
}

export default Component;
