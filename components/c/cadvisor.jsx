import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwsm7kfyt.css';
import '../../css/x/xm99lzboj.css';
import '../../css/j/ja64cnb2a.css';
import '../../css/n/nf8s6zbdh.css';
import '../../css/i/i53b1ojoa.css';
import '../../css/x/xm6uyxb2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gwsm7kfyt"/><path class="xm99lzboj"/><path class="ja64cnb2a"/><path class="nf8s6zbdh"/><path class="i53b1ojoa"/><path class="xm6uyxb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cadvisor"} {...others} />);
}

export default Component;
