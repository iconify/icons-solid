import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ibgn4jeja.css';
import '../../css/i/ica7owv_k.css';
import '../../css/c/cjt33cblq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ibgn4jeja"/><path class="ica7owv_k"/><path class="cjt33cblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:enter-key-one"} {...others} />);
}

export default Component;
