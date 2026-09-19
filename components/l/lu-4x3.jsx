import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kre0tmbgq.css';
import '../../css/v/v18c9fbau.css';
import '../../css/z/z8ps-b1jm.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="kre0tmbgq"/><path class="v18c9fbau"/><path class="z8ps-b1jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lu-4x3"} {...others} />);
}

export default Component;
