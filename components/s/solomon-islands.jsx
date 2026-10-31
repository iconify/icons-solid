import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyxpqbbrk.css';
import '../../css/t/t9reozf7t.css';
import '../../css/y/y4-tgpb3t.css';
import '../../css/v/vtrcjz0wg.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="gyxpqbbrk"/><path class="t9reozf7t"/><path class="y4-tgpb3t"/><path class="vtrcjz0wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:solomon-islands"} {...others} />);
}

export default Component;
