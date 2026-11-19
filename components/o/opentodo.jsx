import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4p_lbhmc.css';
import '../../css/h/hrou1ov-o.css';
import '../../css/j/j92vpxe-i.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="c4p_lbhmc"/><path class="hrou1ov-o"/><path class="j92vpxe-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opentodo"} {...others} />);
}

export default Component;
