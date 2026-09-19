import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/idtbkobxl.css';
import '../../css/t/tfx552bzo.css';
import '../../css/w/wfaf1ggge.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="idtbkobxl"/><path class="tfx552bzo"/><path class="wfaf1ggge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:network-drive"} {...others} />);
}

export default Component;
