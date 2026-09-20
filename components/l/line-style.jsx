import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5ras0q8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5ras0q8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:line-style"} {...others} />);
}

export default Component;
