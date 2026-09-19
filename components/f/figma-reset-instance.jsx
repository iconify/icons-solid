import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xi01rxbal.css';
import '../../css/c/ccnbmpbeo.css';
import '../../css/w/wggo06bzf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xi01rxbal"/><path class="ccnbmpbeo"/><path class="wggo06bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:figma-reset-instance"} {...others} />);
}

export default Component;
