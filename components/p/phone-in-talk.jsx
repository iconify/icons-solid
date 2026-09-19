import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1z3g4b5v.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="i1z3g4b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:phone-in-talk"} {...others} />);
}

export default Component;
