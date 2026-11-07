import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz52zxbce.css';
import '../../css/l/ld9e7wt3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz52zxbce"/><path class="ld9e7wt3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-bold"} {...others} />);
}

export default Component;
