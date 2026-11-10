import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alenx-1ob.css';
import '../../css/v/v3abpxbtw.css';
import '../../css/i/i3obgmbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="alenx-1ob"/><path class="v3abpxbtw"/><path class="i3obgmbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:resend-square"} {...others} />);
}

export default Component;
