import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/p/p9wbff3gl.css';
import '../../css/j/je33esp2z.css';
import '../../css/r/rv6d_n19x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="p9wbff3gl"/><path class="je33esp2z"/><path class="rv6d_n19x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:disappointed-face"} {...others} />);
}

export default Component;
