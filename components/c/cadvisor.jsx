import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rudj5t0tq.css';
import '../../css/x/xm99lzboj.css';
import '../../css/j/ja64cnb2a.css';
import '../../css/o/o4snf-btl.css';
import '../../css/i/i53b1ojoa.css';
import '../../css/x/xm6uyxb2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rudj5t0tq"/><path class="xm99lzboj"/><path class="ja64cnb2a"/><path class="o4snf-btl"/><path class="i53b1ojoa"/><path class="xm6uyxb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cadvisor"} {...others} />);
}

export default Component;
