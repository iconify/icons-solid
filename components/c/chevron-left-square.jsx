import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaczqdbrk.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vaczqdbrk"/><path class="jor-usn7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevron-left-square"} {...others} />);
}

export default Component;
