import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9s5gg3pd.css';
import '../../css/t/tbjrgk0an.css';
import '../../css/w/wfo3hebdq.css';
import '../../css/k/kolyvmb2m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s9s5gg3pd"/><path class="tbjrgk0an"/><path class="wfo3hebdq"/><path class="kolyvmb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gem-48-bold"} {...others} />);
}

export default Component;
