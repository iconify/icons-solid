import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqo9k0b7j.css';
import '../../css/r/r9yno8bmh.css';
import '../../css/r/r78d-q55y.css';
import '../../css/o/om4zpe1hx.css';
import '../../css/r/rdx6pub9z.css';
import '../../css/m/mkkvifbep.css';
import '../../css/h/hjhni3b4o.css';
import '../../css/x/x2xbq2bxy.css';
import '../../css/h/hisx-4b_z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xqo9k0b7j"/><circle class="r9yno8bmh"/><path class="r78d-q55y"/><path class="om4zpe1hx"/><path class="rdx6pub9z"/><path class="mkkvifbep"/><circle class="hjhni3b4o"/><path class="x2xbq2bxy"/><path class="hisx-4b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:health-worker-dark-skin-tone"} {...others} />);
}

export default Component;
