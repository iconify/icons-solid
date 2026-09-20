import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8hgvi38z.css';
import '../../css/z/zmgzk-bxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="zmgzk-bxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-bar-chart-2-sharp-duotone"} {...others} />);
}

export default Component;
