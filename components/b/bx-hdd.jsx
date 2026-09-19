import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge_g-ku2w.css';
import '../../css/l/lzqod34yu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ge_g-ku2w"/><path class="lzqod34yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-hdd"} {...others} />);
}

export default Component;
