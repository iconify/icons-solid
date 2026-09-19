import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urswrcbmq.css';
import '../../css/c/chvrdkzmw.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y54gef5lv.css';
import '../../css/f/fw5rt46mg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="urswrcbmq"/><path class="chvrdkzmw"/></g><g class="cuyn6tgcc"><circle class="y54gef5lv"/><circle class="fw5rt46mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:smile-slight-stroke-16"} {...others} />);
}

export default Component;
