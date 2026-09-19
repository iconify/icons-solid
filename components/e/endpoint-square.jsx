import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kuqdplbdl.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/v/vim-wxqdx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kuqdplbdl"/><circle class="tqb_6nb6c"/><path class="vim-wxqdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:endpoint-square"} {...others} />);
}

export default Component;
