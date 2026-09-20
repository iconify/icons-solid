import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_xaqqbil.css';
import '../../css/s/sc7-ghswd.css';
import '../../css/k/krqi87b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e_xaqqbil"/><path class="sc7-ghswd"/><path clip-rule="evenodd" class="krqi87b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-transfer-duotone"} {...others} />);
}

export default Component;
