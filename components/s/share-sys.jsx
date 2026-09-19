import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qxewtxvch.css';
import '../../css/t/thamupbae.css';
import '../../css/h/h9b_txtlj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qxewtxvch"/><path class="thamupbae"/><path class="h9b_txtlj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:share-sys"} {...others} />);
}

export default Component;
