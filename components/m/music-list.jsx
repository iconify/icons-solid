import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/ucionx-lv.css';
import '../../css/y/ybxw_bc8q.css';
import '../../css/i/id7402b9s.css';
import '../../css/a/ayju-qj-s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="ucionx-lv"/><ellipse class="ybxw_bc8q"/><path class="id7402b9s"/><path class="ayju-qj-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:music-list"} {...others} />);
}

export default Component;
