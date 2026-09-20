import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l1ojs5toy.css';
import '../../css/e/eh_8t3brt.css';
import '../../css/d/d9f73pbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="l1ojs5toy"/><path class="eh_8t3brt"/><path class="d9f73pbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-horizontal-end-percent-sharp-duotone"} {...others} />);
}

export default Component;
