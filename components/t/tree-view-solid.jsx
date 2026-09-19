import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhb0ngb3z.css';
import '../../css/c/c_h_l2b1e.css';
import '../../css/z/zy6inubui.css';
import '../../css/v/v6tmgmbdx.css';
import '../../css/p/pp541vb2g.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<rect class="clr-i-solid clr-i-solid-path-1 dhb0ngb3z"/><path class="c_h_l2b1e clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 zy6inubui"/><path class="clr-i-solid clr-i-solid-path-4 v6tmgmbdx"/><path class="clr-i-solid clr-i-solid-path-5 pp541vb2g"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tree-view-solid"} {...others} />);
}

export default Component;
