import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn_2kjoxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn_2kjoxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:candy-filled"} {...others} />);
}

export default Component;
