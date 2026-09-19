import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w77y2n0rn.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="w77y2n0rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:textformat-subscript"} {...others} />);
}

export default Component;
