import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0yp0ryff.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0yp0ryff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-musical-note"} {...others} />);
}

export default Component;
