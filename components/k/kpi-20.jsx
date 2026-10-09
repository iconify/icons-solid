import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec08kobtf.css';
import '../../css/m/mweb-cbkq.css';
import '../../css/x/xtbukpbgj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ec08kobtf"/><path class="mweb-cbkq"/><path class="xtbukpbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kpi-20"} {...others} />);
}

export default Component;
