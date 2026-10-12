import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd8anyb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd8anyb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:line-dot-right-horizontal-filled"} {...others} />);
}

export default Component;
