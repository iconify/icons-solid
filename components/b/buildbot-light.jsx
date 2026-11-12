import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn3xrcq-r.css';
import '../../css/j/jrgnzrdwe.css';
import '../../css/m/mirl1rbfe.css';
import '../../css/d/dr1ez1b3a.css';
import '../../css/q/qzoqor19g.css';
import '../../css/q/qvr8shuol.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pn3xrcq-r"/><path class="jrgnzrdwe"/><path class="mirl1rbfe"/><path class="dr1ez1b3a"/><path class="qzoqor19g"/><path class="qvr8shuol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buildbot-light"} {...others} />);
}

export default Component;
