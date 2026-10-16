import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgz7t3bfv.css';
import '../../css/x/xbm8wwb5b.css';
import '../../css/q/q1akcccvz.css';
import '../../css/b/bp6zlf0mx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hgz7t3bfv"/><path class="xbm8wwb5b"/><path class="q1akcccvz"/><path class="bp6zlf0mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airborne-wind-48"} {...others} />);
}

export default Component;
