import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bdvc_jw9o.css';
import '../../css/o/of52wgbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bdvc_jw9o"/><path class="of52wgbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:link-2-sharp-two-tone"} {...others} />);
}

export default Component;
