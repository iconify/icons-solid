import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjmxtcbsh.css';
import '../../css/f/f4-u1zbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjmxtcbsh"/><path class="f4-u1zbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-minus-corner-filled"} {...others} />);
}

export default Component;
