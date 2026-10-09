import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/z/zzeuts5xc.css';
import '../../css/e/ezgs73y2p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="zzeuts5xc"/><path class="ezgs73y2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:x-circle-48"} {...others} />);
}

export default Component;
