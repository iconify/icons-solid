import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/txtugcb9p.css';
import '../../css/g/gxfc2_h2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="txtugcb9p"/><path class="gxfc2_h2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:settings"} {...others} />);
}

export default Component;
