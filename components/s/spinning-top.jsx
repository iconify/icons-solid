import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/i/iimhfp_bg.css';
import '../../css/x/x92qun6vf.css';
import '../../css/z/zx2accbtj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="iimhfp_bg"/><path class="x92qun6vf"/><path class="zx2accbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:spinning-top"} {...others} />);
}

export default Component;
