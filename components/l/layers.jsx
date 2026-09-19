import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg9a5mbfj.css';
import '../../css/p/phqvtfx7h.css';
import '../../css/t/t5rgi3bje.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="gg9a5mbfj"/><path class="phqvtfx7h"/><path class="t5rgi3bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:layers"} {...others} />);
}

export default Component;
