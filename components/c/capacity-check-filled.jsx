import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o77m7xohr.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="o77m7xohr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:capacity-check-filled"} {...others} />);
}

export default Component;
