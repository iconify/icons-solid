import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n351nwb6r.css';
import '../../css/z/zw_v3acsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n351nwb6r"/><path class="zw_v3acsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:hospital-symbol"} {...others} />);
}

export default Component;
