import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/e/e9s8vu2sz.css';
import '../../css/b/bfr7qebqy.css';
import '../../css/h/h0n4jlbth.css';
import '../../css/z/zxzflczua.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="e9s8vu2sz"><path class="bfr7qebqy"/><path class="h0n4jlbth"/><path class="zxzflczua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:persistentvolume"} {...others} />);
}

export default Component;
