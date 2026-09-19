import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/no-bto4wu.css';
import '../../css/b/brooorbhm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="no-bto4wu"/><path class="brooorbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:feelgood-one"} {...others} />);
}

export default Component;
