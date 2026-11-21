import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxh80gbuf.css';
import '../../css/f/fj4fd9bjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxh80gbuf"/><path class="fj4fd9bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-backup-filled"} {...others} />);
}

export default Component;
