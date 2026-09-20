import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b7o4qebjj.css';
import '../../css/u/ukuwhbr6n.css';
import '../../css/p/pr1xiiz-k.css';
import '../../css/u/ujme2c5vh.css';
import '../../css/p/pfx1hrb_z.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b7o4qebjj"/><path clip-rule="evenodd" class="ukuwhbr6n"/><path class="pr1xiiz-k"/><path clip-rule="evenodd" class="ujme2c5vh"/><path clip-rule="evenodd" class="pfx1hrb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:flower"} {...others} />);
}

export default Component;
