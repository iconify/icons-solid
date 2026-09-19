import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_beebviz.css';
import '../../css/y/ylrp20bva.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="z_beebviz"/><path class="ylrp20bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:building-x"} {...others} />);
}

export default Component;
