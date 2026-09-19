import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqa5dpbyw.css';
import '../../css/y/y3-2rob4h.css';
import '../../css/r/r_pad0b5k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="aqa5dpbyw"/><path class="y3-2rob4h"/><path class="r_pad0b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:change"} {...others} />);
}

export default Component;
