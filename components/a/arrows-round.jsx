import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf0iaj41n.css';
import '../../css/b/b51midcrf.css';
import '../../css/h/hq0wmibaf.css';
import '../../css/z/zbpqhxbim.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xf0iaj41n"/><path class="b51midcrf"/><path class="hq0wmibaf"/><path class="zbpqhxbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrows-round"} {...others} />);
}

export default Component;
