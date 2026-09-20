import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6_pvtbmi.css';
import '../../css/t/tl27lbbfr.css';
import '../../css/v/vgycajblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v6_pvtbmi"/><path class="tl27lbbfr"/><path clip-rule="evenodd" class="vgycajblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pill-jar2"} {...others} />);
}

export default Component;
