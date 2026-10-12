import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh-_s4tzi.css';
import '../../css/f/fzny0updf.css';
import '../../css/r/rtlhf8blj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nh-_s4tzi"/><path class="fzny0updf"/><path class="rtlhf8blj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dices-filled"} {...others} />);
}

export default Component;
