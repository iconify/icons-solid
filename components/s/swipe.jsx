import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nirxgabwd.css';
import '../../css/j/jv8cybbeg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nirxgabwd"/><path class="jv8cybbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:swipe"} {...others} />);
}

export default Component;
