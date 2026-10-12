import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqk8or5gl.css';
import '../../css/a/a913n8goh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqk8or5gl"/><path class="a913n8goh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circuit-board-filled"} {...others} />);
}

export default Component;
