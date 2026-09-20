import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rbmj0yx6b.css';
import '../../css/x/xwir2bcln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="rbmj0yx6b"/><path class="xwir2bcln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-click-sharp-duotone"} {...others} />);
}

export default Component;
