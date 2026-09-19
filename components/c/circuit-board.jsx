import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kheaoj4ys.css';
import '../../css/t/t_glypoyp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kheaoj4ys"/><path class="t_glypoyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circuit-board"} {...others} />);
}

export default Component;
