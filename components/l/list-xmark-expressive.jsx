import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rloqbnbld.css';
import '../../css/k/ke5zq-gtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rloqbnbld"/><path class="ke5zq-gtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:list-xmark-expressive"} {...others} />);
}

export default Component;
