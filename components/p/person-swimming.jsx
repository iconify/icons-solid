import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfmueqmcb.css';
import '../../css/v/v1olb4a7k.css';
import '../../css/u/u4zlcabbx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tfmueqmcb"/><path class="v1olb4a7k"/><path class="u4zlcabbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-swimming"} {...others} />);
}

export default Component;
