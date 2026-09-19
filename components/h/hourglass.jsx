import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m99s_db5h.css';
import '../../css/j/jz1kv-49a.css';

const viewBox = {"width":21,"height":32};
const content = `<g class="cuyn6tgcc"><path class="m99s_db5h"/><path class="jz1kv-49a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:hourglass"} {...others} />);
}

export default Component;
