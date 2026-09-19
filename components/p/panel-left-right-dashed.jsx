import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lo92hvbun.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/c/cqsfoebtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lo92hvbun"/><path class="u4sxwwy9k"/><path class="cqsfoebtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-left-right-dashed"} {...others} />);
}

export default Component;
