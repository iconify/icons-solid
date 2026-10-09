import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwtuwobgt.css';
import '../../css/n/n6oa-n9kh.css';
import '../../css/a/azbjuwumn.css';
import '../../css/a/at4icdc8p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xwtuwobgt"/><path class="n6oa-n9kh"/><path class="azbjuwumn"/><path class="at4icdc8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-recycle-20-bold"} {...others} />);
}

export default Component;
