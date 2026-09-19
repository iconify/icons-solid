import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq1lkzb4i.css';
import '../../css/y/ykrh_um7r.css';
import '../../css/l/ltn1tccxu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="pq1lkzb4i"><path class="ykrh_um7r"/><path class="ltn1tccxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:xigua"} {...others} />);
}

export default Component;
