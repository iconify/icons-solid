import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v18c9fbau.css';
import '../../css/f/f_vjhhbhk.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="v18c9fbau"/><path class="f_vjhhbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:at-4x3"} {...others} />);
}

export default Component;
