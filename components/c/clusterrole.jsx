import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/n/n681exbvn.css';
import '../../css/v/v8xgb1b2z.css';
import '../../css/h/h2qvw_boc.css';
import '../../css/k/k9-8f0byw.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g transform="translate(-.993 -.894)" class="n681exbvn"><ellipse class="v8xgb1b2z"/><path class="h2qvw_boc"/><path class="k9-8f0byw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:clusterrole"} {...others} />);
}

export default Component;
