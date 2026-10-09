import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxbs21b9m.css';
import '../../css/c/ckdcb_lym.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zxbs21b9m"/><path class="ckdcb_lym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:id-card-48"} {...others} />);
}

export default Component;
