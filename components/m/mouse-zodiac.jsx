import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bxxidwbyl.css';
import '../../css/b/bbq1zobht.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bxxidwbyl"/><path class="bbq1zobht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mouse-zodiac"} {...others} />);
}

export default Component;
