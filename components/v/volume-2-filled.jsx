import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3j0fwjec.css';
import '../../css/o/ou4giibdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3j0fwjec"/><path class="ou4giibdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:volume-2-filled"} {...others} />);
}

export default Component;
