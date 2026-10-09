import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l35vslo1f.css';
import '../../css/e/e_42ybv1n.css';
import '../../css/s/sv6vtmbsj.css';
import '../../css/h/hsgk_5b2b.css';
import '../../css/p/p6s1wrhpk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l35vslo1f"/><path class="e_42ybv1n"/><path class="sv6vtmbsj"/><path class="hsgk_5b2b"/><path class="p6s1wrhpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:island-48-bold"} {...others} />);
}

export default Component;
