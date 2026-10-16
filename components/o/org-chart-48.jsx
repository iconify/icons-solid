import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrb0n9bgf.css';
import '../../css/r/rzr08ebez.css';
import '../../css/j/jzzafn9vl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yrb0n9bgf"/><path class="rzr08ebez"/><path class="jzzafn9vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:org-chart-48"} {...others} />);
}

export default Component;
