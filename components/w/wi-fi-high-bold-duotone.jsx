import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/ndvam-0ub.css';
import '../../css/m/m_yt74b1y.css';
import '../../css/t/tfsq0xb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="ndvam-0ub"/><path class="m_yt74b1y"/></g><path class="tfsq0xb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-high-bold-duotone"} {...others} />);
}

export default Component;
