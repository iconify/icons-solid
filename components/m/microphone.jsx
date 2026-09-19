import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/boyzknbju.css';
import '../../css/g/ghd3ioxxg.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="boyzknbju"/><path class="ghd3ioxxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:microphone"} {...others} />);
}

export default Component;
