import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp2190qyz.css';
import '../../css/x/x-pf1hz3a.css';
import '../../css/j/j020-w2mj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp2190qyz"/><path class="x-pf1hz3a"/><path clip-rule="evenodd" class="j020-w2mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-warning-outline"} {...others} />);
}

export default Component;
