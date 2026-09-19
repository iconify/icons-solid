import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp2bpywtk.css';

const viewBox = {"width":1026,"height":703};
const content = `<path class="rp2bpywtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:paperboat"} {...others} />);
}

export default Component;
