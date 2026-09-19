import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcd_a183m.css';
import '../../css/j/j4rbxcc2v.css';
import '../../css/h/hmtgkjzwx.css';
import '../../css/b/b9ptyaccn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bcd_a183m"/><path class="j4rbxcc2v"/><path class="hmtgkjzwx"/><path class="b9ptyaccn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:spine-label"} {...others} />);
}

export default Component;
