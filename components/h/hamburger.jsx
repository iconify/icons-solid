import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lwc-i7bqs.css';
import '../../css/y/ysooycc-h.css';
import '../../css/j/jytgr1bls.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path clip-rule="evenodd" class="lwc-i7bqs"/><path class="ysooycc-h"/><path class="jytgr1bls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hamburger"} {...others} />);
}

export default Component;
