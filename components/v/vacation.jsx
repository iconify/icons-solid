import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/ktazicukk.css';
import '../../css/w/wrqafjrbc.css';
import '../../css/b/bmc7y_buz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ktazicukk"/><path class="wrqafjrbc"/><path class="bmc7y_buz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vacation"} {...others} />);
}

export default Component;
