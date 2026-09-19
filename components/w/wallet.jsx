import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0_uufb3i.css';
import '../../css/t/tn2_8hb1p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u0_uufb3i"/><path clip-rule="evenodd" class="tn2_8hb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:wallet"} {...others} />);
}

export default Component;
