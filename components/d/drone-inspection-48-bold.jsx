import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w63goej-d.css';
import '../../css/z/zqrgw3bcs.css';
import '../../css/s/s1299sedn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w63goej-d"/><path class="zqrgw3bcs"/><path class="s1299sedn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-inspection-48-bold"} {...others} />);
}

export default Component;
