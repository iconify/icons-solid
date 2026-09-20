import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xc27zd9-j.css';
import '../../css/q/qwvf_lbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="xc27zd9-j"/><path class="qwvf_lbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wrestling-mask-1"} {...others} />);
}

export default Component;
