import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/v/vza_amlsh.css';
import '../../css/v/vt81eebpc.css';
import '../../css/j/j8iio6lkj.css';
import '../../css/g/gkmoj595i.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="vza_amlsh"/><path class="vt81eebpc"/><path class="j8iio6lkj"/></g><path class="gkmoj595i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:vc-1x1"} {...others} />);
}

export default Component;
