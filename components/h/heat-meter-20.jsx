import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et_33pbys.css';
import '../../css/n/n2ffv50qs.css';
import '../../css/p/p2kzhab-j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="et_33pbys"/><path class="n2ffv50qs"/><path class="p2kzhab-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-meter-20"} {...others} />);
}

export default Component;
