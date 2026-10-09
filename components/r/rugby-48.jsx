import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2u9f_tut.css';
import '../../css/e/ezgs73y2p.css';
import '../../css/z/ze96stecn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2u9f_tut"/><path class="ezgs73y2p"/><path class="ze96stecn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rugby-48"} {...others} />);
}

export default Component;
