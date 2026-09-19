import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6pzuyx4r.css';
import '../../css/u/ufqy7fo2b.css';
import '../../css/x/xw_4jzbwo.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="t6pzuyx4r"/><path class="ufqy7fo2b"/><path class="xw_4jzbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:noentry"} {...others} />);
}

export default Component;
