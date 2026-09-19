import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_3r7i84j.css';
import '../../css/x/xils0pbhd.css';
import '../../css/q/qiuo-kbcb.css';
import '../../css/z/zjapbdb7d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a_3r7i84j"/><path class="xils0pbhd"/><path class="qiuo-kbcb"/><path class="zjapbdb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:palette-duo"} {...others} />);
}

export default Component;
