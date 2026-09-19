import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9k6pi0bs.css';
import '../../css/c/cupr9sbkk.css';
import '../../css/n/na-j5gbds.css';
import '../../css/e/e_edifbry.css';
import '../../css/e/e2ft2k07m.css';
import '../../css/x/xh7p1kbzd.css';
import '../../css/m/m5h7gpfev.css';
import '../../css/h/h044uvxrk.css';

const viewBox = {"width":88,"height":99.998};
const content = `<path class="g9k6pi0bs"/><path class="cupr9sbkk"/><path class="na-j5gbds"/><path class="e_edifbry"/><path class="e2ft2k07m"/><path class="xh7p1kbzd"/><path class="m5h7gpfev"/><path class="h044uvxrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:lock"} {...others} />);
}

export default Component;
