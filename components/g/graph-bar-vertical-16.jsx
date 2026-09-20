import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgvc3bknt.css';
import '../../css/n/nmc_ieezo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tgvc3bknt"/><path class="nmc_ieezo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:graph-bar-vertical-16"} {...others} />);
}

export default Component;
