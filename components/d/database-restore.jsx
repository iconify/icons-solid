import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/f/fberbib5e.css';
import '../../css/j/jiu158igz.css';
import '../../css/e/efc1by8br.css';
import '../../css/d/dy0x03tdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(-180 12 5.23)" class="pd3w4vb1f"/><path class="fberbib5e"/><ellipse transform="rotate(-180 12 5.23)" class="jiu158igz"/><path class="efc1by8br"/><path class="dy0x03tdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:database-restore"} {...others} />);
}

export default Component;
