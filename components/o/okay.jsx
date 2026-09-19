import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/scu013tui.css';
import '../../css/j/jbj0_8umw.css';
import '../../css/s/s07a-lb1i.css';
import '../../css/i/ico2rabfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="scu013tui"/><path class="jbj0_8umw"/><path class="s07a-lb1i"/><path class="ico2rabfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:okay"} {...others} />);
}

export default Component;
