import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xsnp0xxat.css';
import '../../css/y/yeslf1b9b.css';
import '../../css/n/ne1xfo68v.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="xsnp0xxat"/><path class="yeslf1b9b"/><path class="ne1xfo68v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:safe-box"} {...others} />);
}

export default Component;
