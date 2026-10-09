import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-y598bgk.css';
import '../../css/c/cuw48wy1a.css';
import '../../css/u/u5cct483i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y-y598bgk"/><path class="cuw48wy1a"/><path class="u5cct483i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:record-player-20"} {...others} />);
}

export default Component;
