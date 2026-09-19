import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h3rplhb3u.css';
import '../../css/y/yq1lnbbvu.css';
import '../../css/z/zj-4fifqf.css';
import '../../css/e/ewveombiy.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="h3rplhb3u"/><path class="yq1lnbbvu"/><path class="zj-4fifqf"/><path class="ewveombiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:puzzle"} {...others} />);
}

export default Component;
