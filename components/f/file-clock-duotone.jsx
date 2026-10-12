import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xszn3n70c.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/w/w8kmi6bls.css';
import '../../css/y/ybl8sqh6q.css';
import '../../css/f/ffcftbauu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xszn3n70c"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="w8kmi6bls"/><path class="ybl8sqh6q"/><path class="ffcftbauu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-clock-duotone"} {...others} />);
}

export default Component;
