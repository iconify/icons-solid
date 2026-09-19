import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jddk7dbei.css';
import '../../css/k/kb3-99ksi.css';
import '../../css/j/jt1rljkls.css';
import '../../css/g/gve1udbrm.css';
import '../../css/n/nljj-lovt.css';
import '../../css/t/t1z6b6bqx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cls-3 jddk7dbei"/><path class="cls-1 kb3-99ksi"/><path class="cls-4 jt1rljkls"/><path class="cls-5 gve1udbrm"/><path class="cls-2 nljj-lovt"/><path class="t1z6b6bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:babylonjs"} {...others} />);
}

export default Component;
