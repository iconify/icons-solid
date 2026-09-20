import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8mijlhgj.css';
import '../../css/e/e0vgkpblk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i8mijlhgj"/><path class="e0vgkpblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-pass-light"} {...others} />);
}

export default Component;
