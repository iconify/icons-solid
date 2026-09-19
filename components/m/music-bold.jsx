import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc9b90bna.css';
import '../../css/m/mucpf5r-l.css';
import '../../css/x/xtvamjbnd.css';
import '../../css/a/apw2ovytu.css';
import '../../css/z/zvhxhh3sp.css';
import '../../css/m/mvny730jd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="xc9b90bna"><path class="mucpf5r-l"/><ellipse class="xtvamjbnd"/><path class="apw2ovytu"/><ellipse class="zvhxhh3sp"/><path class="mvny730jd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:music-bold"} {...others} />);
}

export default Component;
