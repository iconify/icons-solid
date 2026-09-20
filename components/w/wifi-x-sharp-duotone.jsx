import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bi9ermbmx.css';
import '../../css/s/sudo-1bgw.css';
import '../../css/o/osxy73eeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bi9ermbmx"/><path class="sudo-1bgw"/><path class="osxy73eeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-x-sharp-duotone"} {...others} />);
}

export default Component;
