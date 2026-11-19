import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/reazo4b-i.css';
import '../../css/j/joni90--b.css';
import '../../css/r/rtu1dw7eq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="reazo4b-i"/><path class="joni90--b"/><path class="rtu1dw7eq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bowl-scoops"} {...others} />);
}

export default Component;
