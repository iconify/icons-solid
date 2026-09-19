import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y5f1ucbki.css';
import '../../css/z/zfouoybeb.css';
import '../../css/c/c8tjlaclr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y5f1ucbki"/><path class="zfouoybeb"/><path class="c8tjlaclr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lotion"} {...others} />);
}

export default Component;
