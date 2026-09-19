import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rrrrw5wgk.css';
import '../../css/b/b0jcdrlrj.css';
import '../../css/b/b44haw56m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rrrrw5wgk"/><path class="b0jcdrlrj"/><path class="b44haw56m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:homestay"} {...others} />);
}

export default Component;
