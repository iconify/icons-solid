import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3lpxulyc.css';
import '../../css/i/i0ekbjbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3lpxulyc"/><path class="i0ekbjbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-left-enter-filled"} {...others} />);
}

export default Component;
