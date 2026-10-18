import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu4hgabyh.css';
import '../../css/p/pajsys7wq.css';
import '../../css/c/clnf1dbfu.css';
import '../../css/q/qx_f1tive.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eu4hgabyh"/><path class="pajsys7wq"/><path class="clnf1dbfu"/><path class="qx_f1tive"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cooling-48-bold"} {...others} />);
}

export default Component;
