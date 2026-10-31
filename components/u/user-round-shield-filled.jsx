import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4qkawp1w.css';
import '../../css/w/woy2hk4bh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4qkawp1w"/><path class="woy2hk4bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-shield-filled"} {...others} />);
}

export default Component;
