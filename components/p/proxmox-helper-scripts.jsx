import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzec-gbac.css';
import '../../css/f/ff2dlhbix.css';
import '../../css/a/a7--3wfxj.css';
import '../../css/a/at489ww4h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kzec-gbac"/><path class="ff2dlhbix"/><path class="a7--3wfxj"/><path class="at489ww4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proxmox-helper-scripts"} {...others} />);
}

export default Component;
