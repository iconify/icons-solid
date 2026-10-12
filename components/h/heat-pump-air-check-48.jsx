import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y53-rwntq.css';
import '../../css/p/pyx51abpy.css';
import '../../css/w/wk2dzgbah.css';
import '../../css/l/l2oen6bkn.css';
import '../../css/i/iau15ibeg.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y53-rwntq"/><path class="pyx51abpy"/><path class="wk2dzgbah"/><path class="l2oen6bkn"/><path class="iau15ibeg"/><path class="qdytrdbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-check-48"} {...others} />);
}

export default Component;
