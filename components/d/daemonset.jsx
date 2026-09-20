import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w1wyuo23y.css';
import '../../css/g/gd-9wxbnw.css';
import '../../css/f/fl7syybsf.css';
import '../../css/b/bwi82mbbo.css';
import '../../css/p/pfmxavrbj.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="d2kvgvbvc"><path class="w1wyuo23y"/><path class="gd-9wxbnw"/><path class="fl7syybsf"/><path class="bwi82mbbo"/><path class="pfmxavrbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:daemonset"} {...others} />);
}

export default Component;
