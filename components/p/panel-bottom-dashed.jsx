import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ralru1bvw.css';
import '../../css/u/u4sxwwy9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ralru1bvw"/><path class="u4sxwwy9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-bottom-dashed"} {...others} />);
}

export default Component;
