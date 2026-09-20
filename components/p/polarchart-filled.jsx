import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4-h6-tbe.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="g4-h6-tbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:polarchart-filled"} {...others} />);
}

export default Component;
