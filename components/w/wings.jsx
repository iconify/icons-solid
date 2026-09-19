import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/slh1_wb1o.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/x/xd_s4q3ie.css';
import '../../css/j/ja7me1bvv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="slh1_wb1o"/><g class="l5y23ru5w"><path class="xd_s4q3ie"/><path class="ja7me1bvv"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:wings"} {...others} />);
}

export default Component;
