import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wxj45vcve.css';
import '../../css/v/vd3atfbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wxj45vcve"/><path class="vd3atfbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:milk-one"} {...others} />);
}

export default Component;
