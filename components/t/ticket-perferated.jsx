import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/poo28ib0w.css';
import '../../css/w/woim4dsal.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="poo28ib0w"/><path class="woim4dsal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:ticket-perferated"} {...others} />);
}

export default Component;
