import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz5tfxbtx.css';
import '../../css/l/l0ryvi2pe.css';
import '../../css/u/ug6nvcb0n.css';
import '../../css/e/exbu-tbth.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lz5tfxbtx"/><path class="l0ryvi2pe"/><path class="ug6nvcb0n"/><path class="exbu-tbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-notepad"} {...others} />);
}

export default Component;
