import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iml9x8oaj.css';
import '../../css/s/symfdeb8a.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="iml9x8oaj"/><circle class="symfdeb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:photo"} {...others} />);
}

export default Component;
