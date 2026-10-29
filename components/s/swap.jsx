import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpaoo99bk.css';
import '../../css/r/rnt8kobtz.css';
import '../../css/e/ecfshgrfk.css';
import '../../css/e/e1s9j5b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpaoo99bk wm-k"/><path class="rnt8kobtz wm-a"/><path class="ecfshgrfk wm-k"/><path class="e1s9j5b3x wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:swap"} {...others} />);
}

export default Component;
