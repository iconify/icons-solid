import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag2418r2o.css';
import '../../css/x/xw-233z3g.css';
import '../../css/l/len3wybrl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ag2418r2o"/><path class="xw-233z3g"/><path class="len3wybrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:receipt-outline"} {...others} />);
}

export default Component;
