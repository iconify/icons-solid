import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c0w0gbbmk.css';
import '../../css/i/igivs8afy.css';
import '../../css/b/bjvdyzagy.css';
import '../../css/s/s4ttgicka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c0w0gbbmk"/><path class="igivs8afy"/><path class="bjvdyzagy"/><path class="s4ttgicka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blood-bag"} {...others} />);
}

export default Component;
