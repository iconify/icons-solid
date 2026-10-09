import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apcghhbso.css';
import '../../css/r/r2-klm-1b.css';
import '../../css/a/azjk1obih.css';
import '../../css/y/ytt933dwa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="apcghhbso"/><path class="r2-klm-1b"/><path class="azjk1obih"/><path class="ytt933dwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-off-48"} {...others} />);
}

export default Component;
