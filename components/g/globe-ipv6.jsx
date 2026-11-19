import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4jy-5b2t.css';
import '../../css/n/nv93gbbuw.css';
import '../../css/f/fbcgu3o_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x4jy-5b2t"/><path class="nv93gbbuw"/><path class="fbcgu3o_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-ipv6"} {...others} />);
}

export default Component;
