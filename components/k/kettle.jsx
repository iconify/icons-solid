import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xo540u1dm.css';
import '../../css/i/i75ax53xw.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="nz_20wbpz"><path class="xo540u1dm"/><path class="i75ax53xw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:kettle"} {...others} />);
}

export default Component;
