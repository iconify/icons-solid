import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc7jtpbps.css';
import '../../css/e/e3_eajjzt.css';
import '../../css/h/h4ktmjrgl.css';
import '../../css/u/uh48u-war.css';
import '../../css/d/dudbm7bdy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lc7jtpbps"/><path class="e3_eajjzt"/><path class="h4ktmjrgl"/><path class="uh48u-war"/><path class="dudbm7bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:closed-umbrella"} {...others} />);
}

export default Component;
