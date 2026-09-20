import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/z/zfdh_1bxb.css';
import '../../css/j/jzf9-x16t.css';
import '../../css/p/pisyfrb1i.css';
import '../../css/c/cjj-yjbqd.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="zfdh_1bxb"><path class="jzf9-x16t"/><path class="pisyfrb1i"/><path class="cjj-yjbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:service"} {...others} />);
}

export default Component;
