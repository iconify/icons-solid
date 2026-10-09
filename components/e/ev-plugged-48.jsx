import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqoupubsw.css';
import '../../css/j/j9xgzpbyl.css';
import '../../css/e/elhd0fb5i.css';
import '../../css/g/gsfwadbzw.css';
import '../../css/s/s6-zm8vzj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tqoupubsw"/><path class="j9xgzpbyl"/><path class="elhd0fb5i"/><path class="gsfwadbzw"/><path class="s6-zm8vzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-plugged-48"} {...others} />);
}

export default Component;
