import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhf1_tbip.css';
import '../../css/h/h27vhbcct.css';
import '../../css/f/f5qyoxbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nhf1_tbip"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><path class="f5qyoxbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:contrast"} {...others} />);
}

export default Component;
