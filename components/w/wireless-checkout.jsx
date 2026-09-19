import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0-6anw0t.css';
import '../../css/j/jr1xz7b-w.css';
import '../../css/l/l2k-wqsww.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s0-6anw0t"/><path class="jr1xz7b-w"/><path class="l2k-wqsww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wireless-checkout"} {...others} />);
}

export default Component;
