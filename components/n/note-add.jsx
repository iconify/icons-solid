import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3ke734ah.css';
import '../../css/z/zagwqcton.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r3ke734ah"/><path class="zagwqcton"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:note-add"} {...others} />);
}

export default Component;
