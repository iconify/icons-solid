import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz45orb-l.css';
import '../../css/p/pd3uy56kd.css';
import '../../css/y/yhzwzc4av.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wz45orb-l"/><path class="pd3uy56kd"/><path class="yhzwzc4av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:multimedia-controls-button-next"} {...others} />);
}

export default Component;
