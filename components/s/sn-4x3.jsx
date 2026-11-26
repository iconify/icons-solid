import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/ehm1dq_ba.css';
import '../../css/b/b0bpa7bso.css';
import '../../css/z/zx9t5c1ep.css';
import '../../css/a/a33dbvblr.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="ehm1dq_ba"/><path class="b0bpa7bso"/><path class="zx9t5c1ep"/></g><path class="a33dbvblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sn-4x3"} {...others} />);
}

export default Component;
