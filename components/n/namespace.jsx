import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/w/wsii5b33m.css';
import '../../css/n/ntguurbur.css';
import '../../css/w/wuc6jt4fd.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="wsii5b33m"/><path class="ntguurbur"/></g><path class="wuc6jt4fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:namespace"} {...others} />);
}

export default Component;
