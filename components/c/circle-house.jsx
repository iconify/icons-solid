import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c8elt-b4t.css';
import '../../css/o/oat89jb2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c8elt-b4t"/><path class="oat89jb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:circle-house"} {...others} />);
}

export default Component;
