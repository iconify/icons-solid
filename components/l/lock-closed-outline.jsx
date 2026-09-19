import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pth7mvs2w.css';
import '../../css/f/ff9jhsbaq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pth7mvs2w"/><rect class="ff9jhsbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:lock-closed-outline"} {...others} />);
}

export default Component;
