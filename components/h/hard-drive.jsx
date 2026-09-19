import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wclb063ro.css';
import '../../css/l/lzqod34yu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wclb063ro"/><path class="lzqod34yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hard-drive"} {...others} />);
}

export default Component;
