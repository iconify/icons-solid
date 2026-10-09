import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnkbx2uas.css';
import '../../css/j/jvdojbb4j.css';
import '../../css/j/j5lb_-btt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bnkbx2uas"/><path class="jvdojbb4j"/><path class="j5lb_-btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:headset-20"} {...others} />);
}

export default Component;
