import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6pox3bsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6pox3bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:grid-2x2-plus-filled"} {...others} />);
}

export default Component;
