import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/e98saobvs.css';
import '../../css/l/lkr83rggl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="e98saobvs"/><path class="lkr83rggl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-list-light"} {...others} />);
}

export default Component;
