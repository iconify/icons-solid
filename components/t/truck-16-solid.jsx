import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhsrn1yyz.css';
import '../../css/j/jro2vlvum.css';
import '../../css/y/y0id5tbpn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yhsrn1yyz"/><path class="jro2vlvum"/><path class="y0id5tbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:truck-16-solid"} {...others} />);
}

export default Component;
