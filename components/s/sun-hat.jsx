import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t92oe3bkc.css';
import '../../css/i/i18zfbb0s.css';
import '../../css/j/j5_rsh35x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t92oe3bkc"/><path class="i18zfbb0s"/><path class="j5_rsh35x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sun-hat"} {...others} />);
}

export default Component;
