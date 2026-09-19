import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ml6acebxg.css';
import '../../css/m/muuj6ob0x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ml6acebxg"/><path class="muuj6ob0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:rotate"} {...others} />);
}

export default Component;
