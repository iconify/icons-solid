import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huwc7bvri.css';
import '../../css/o/ohu1b7g7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="huwc7bvri"/><path clip-rule="evenodd" class="ohu1b7g7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:magnifying-glass-expressive"} {...others} />);
}

export default Component;
