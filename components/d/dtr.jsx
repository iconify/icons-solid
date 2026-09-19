import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kpi2fzh0j.css';
import '../../css/b/b0h_shk9a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="kpi2fzh0j"/><path class="b0h_shk9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:dtr"} {...others} />);
}

export default Component;
