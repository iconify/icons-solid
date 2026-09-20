import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzm141dva.css';
import '../../css/d/d-spf-bpy.css';
import '../../css/n/ndr05hb8m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zzm141dva"/><path class="d-spf-bpy"/><path class="ndr05hb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mastercard"} {...others} />);
}

export default Component;
