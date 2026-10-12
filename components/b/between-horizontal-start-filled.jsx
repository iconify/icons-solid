import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb8rxjbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb8rxjbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:between-horizontal-start-filled"} {...others} />);
}

export default Component;
