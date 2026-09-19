import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sz9e8238f.css';
import '../../css/w/w_8gvccbg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="sz9e8238f"/><path class="w_8gvccbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:coat-hanger"} {...others} />);
}

export default Component;
