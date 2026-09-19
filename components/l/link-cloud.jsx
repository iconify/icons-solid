import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jcp0x14wf.css';
import '../../css/c/c_jz431qi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jcp0x14wf"/><path class="c_jz431qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:link-cloud"} {...others} />);
}

export default Component;
