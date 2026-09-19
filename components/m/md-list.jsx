import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1t9b8bvt.css';
import '../../css/m/mr-kkz0yl.css';
import '../../css/i/imxhuacrw.css';
import '../../css/n/n839ahj1f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r1t9b8bvt"/><path class="mr-kkz0yl"/><path class="imxhuacrw"/><g><path class="n839ahj1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-list"} {...others} />);
}

export default Component;
