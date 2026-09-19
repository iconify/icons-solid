import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yss197btb.css';
import '../../css/i/iabrmvfcy.css';
import '../../css/c/c5gmrlmbr.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="yss197btb"/><path class="iabrmvfcy"/><path class="c5gmrlmbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-globe-alt"} {...others} />);
}

export default Component;
