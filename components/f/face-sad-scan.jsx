import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2n5tx6bt.css';
import '../../css/c/ciio1qlct.css';
import '../../css/q/q4mkgkb3p.css';
import '../../css/t/to8hoqxsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e2n5tx6bt"/><path class="ciio1qlct"/><path class="q4mkgkb3p"/><path class="to8hoqxsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-sad-scan"} {...others} />);
}

export default Component;
