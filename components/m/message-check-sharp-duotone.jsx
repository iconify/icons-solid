import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rphf6ybon.css';
import '../../css/c/cdsy2nblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="rphf6ybon"/><path class="cdsy2nblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-check-sharp-duotone"} {...others} />);
}

export default Component;
