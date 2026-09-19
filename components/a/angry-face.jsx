import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/r/rv6d_n19x.css';
import '../../css/b/bq9w9_bee.css';
import '../../css/x/xalxs-y0d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="rv6d_n19x"/><path class="bq9w9_bee"/><path class="xalxs-y0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:angry-face"} {...others} />);
}

export default Component;
