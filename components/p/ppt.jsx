import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r9ztc99mw.css';
import '../../css/z/zw37bnb8x.css';
import '../../css/m/m4vuqabns.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="r9ztc99mw"/><path clip-rule="evenodd" class="zw37bnb8x"/><path class="m4vuqabns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ppt"} {...others} />);
}

export default Component;
