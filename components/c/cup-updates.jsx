import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdf4p6y_w.css';
import '../../css/e/elyz0lc1b.css';
import '../../css/r/r8vx61juh.css';
import '../../css/m/m2nt2me3u.css';
import '../../css/g/gmchyevfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zdf4p6y_w"/><path class="elyz0lc1b"/><path class="r8vx61juh"/><path class="m2nt2me3u"/><path class="gmchyevfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cup-updates"} {...others} />);
}

export default Component;
