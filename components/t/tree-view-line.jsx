import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbtmetblr.css';
import '../../css/i/irv520bvz.css';
import '../../css/u/uqipglkgr.css';
import '../../css/v/v6tmgmbdx.css';
import '../../css/p/pp541vb2g.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 wbtmetblr"/><path class="clr-i-outline clr-i-outline-path-2 irv520bvz"/><path class="clr-i-outline clr-i-outline-path-3 uqipglkgr"/><path class="clr-i-outline clr-i-outline-path-4 v6tmgmbdx"/><path class="clr-i-outline clr-i-outline-path-5 pp541vb2g"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tree-view-line"} {...others} />);
}

export default Component;
