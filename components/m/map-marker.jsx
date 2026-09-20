import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irg2cubto.css';
import '../../css/y/yzp037bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irg2cubto"/><path class="yzp037bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:map-marker"} {...others} />);
}

export default Component;
