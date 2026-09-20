import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gaxtyhajp.css';
import '../../css/e/eoz2-lbpy.css';
import '../../css/h/h4n3fdcuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gaxtyhajp"/><path class="eoz2-lbpy"/><path class="h4n3fdcuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:user-plus-sharp"} {...others} />);
}

export default Component;
