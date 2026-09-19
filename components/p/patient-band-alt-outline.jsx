import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fosf2ck3z.css';
import '../../css/x/x1kqalb8d.css';
import '../../css/i/ixdq6ntaf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fosf2ck3z"/><path class="x1kqalb8d"/><path clip-rule="evenodd" class="ixdq6ntaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:patient-band-alt-outline"} {...others} />);
}

export default Component;
