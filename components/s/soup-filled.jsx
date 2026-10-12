import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwosufbcj.css';
import '../../css/r/re3b6ubpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwosufbcj"/><path class="re3b6ubpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:soup-filled"} {...others} />);
}

export default Component;
