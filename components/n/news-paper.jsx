import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpvh64iaj.css';
import '../../css/r/rwws3mbvu.css';
import '../../css/b/b4r24acop.css';
import '../../css/e/egxctib4b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tpvh64iaj"/><path class="rwws3mbvu"/><path class="b4r24acop"/><path class="egxctib4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:news-paper"} {...others} />);
}

export default Component;
