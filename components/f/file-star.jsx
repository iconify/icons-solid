import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8ved5nop.css';
import '../../css/s/s5d7qab8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j8ved5nop"/><path class="s5d7qab8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-star"} {...others} />);
}

export default Component;
