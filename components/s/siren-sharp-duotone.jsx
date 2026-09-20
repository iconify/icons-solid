import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ikxifqblw.css';
import '../../css/z/zusgepdhq.css';
import '../../css/e/e5xtnl27s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ikxifqblw"/><path clip-rule="evenodd" class="zusgepdhq"/><path class="e5xtnl27s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:siren-sharp-duotone"} {...others} />);
}

export default Component;
