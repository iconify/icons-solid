import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0vex97qs.css';
import '../../css/p/ppna39b1h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="o0vex97qs"/><path class="ppna39b1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:colorectal-cancer"} {...others} />);
}

export default Component;
