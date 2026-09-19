import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jnt21kr7t.css';
import '../../css/i/i2bw-2b8y.css';
import '../../css/g/gmn1ck5qx.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="jnt21kr7t"/><path class="i2bw-2b8y"/><path class="gmn1ck5qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ml-1x1"} {...others} />);
}

export default Component;
