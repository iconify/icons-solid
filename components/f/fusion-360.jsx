import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrmuud_5g.css';
import '../../css/l/lcyii6bqn.css';
import '../../css/x/x2yq7dqap.css';
import '../../css/b/bku-i3w6b.css';
import '../../css/o/otianebdo.css';
import '../../css/r/rrpz0cwhx.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="vrmuud_5g"><path class="lcyii6bqn"/><path class="x2yq7dqap"/></g><path class="bku-i3w6b"/><path class="otianebdo"/><path class="rrpz0cwhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fusion-360"} {...others} />);
}

export default Component;
