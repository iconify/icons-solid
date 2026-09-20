import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe8ilbs_y.css';
import '../../css/i/i-jzrbbnk.css';
import '../../css/r/r0ixaf-0p.css';
import '../../css/c/conjjsbzy.css';

const viewBox = {"width":367.5,"height":45};
const content = `<path class="pe8ilbs_y"/><path class="i-jzrbbnk"/><path class="r0ixaf-0p"/><path class="conjjsbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:productboard-dark"} {...others} />);
}

export default Component;
