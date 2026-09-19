import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z5j-37bwo.css';
import '../../css/c/c8tjlaclr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="z5j-37bwo"/><path class="c8tjlaclr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lotion"} {...others} />);
}

export default Component;
