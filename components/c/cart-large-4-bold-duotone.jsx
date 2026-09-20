import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7z01va1a.css';
import '../../css/k/kvl8uc5on.css';
import '../../css/m/m4cyfpbci.css';
import '../../css/m/mguo27ihz.css';
import '../../css/r/rogzy4bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l7z01va1a"/><path class="kvl8uc5on"/><path class="m4cyfpbci"/><path class="mguo27ihz"/><path class="rogzy4bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-4-bold-duotone"} {...others} />);
}

export default Component;
