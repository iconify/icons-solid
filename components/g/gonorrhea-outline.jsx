import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjylen1rs.css';
import '../../css/h/hvd6d7brl.css';
import '../../css/w/walgkl0pe.css';
import '../../css/m/mcjgljl4z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hjylen1rs"/><path clip-rule="evenodd" class="hvd6d7brl"/><path class="walgkl0pe"/><path clip-rule="evenodd" class="mcjgljl4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:gonorrhea-outline"} {...others} />);
}

export default Component;
