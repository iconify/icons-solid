import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1_chib4c.css';
import '../../css/j/jeuojelkk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u1_chib4c"/><path class="jeuojelkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-check-20"} {...others} />);
}

export default Component;
