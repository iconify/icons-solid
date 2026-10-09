import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gofrhbcai.css';
import '../../css/t/tpe_wnyve.css';
import '../../css/k/kr1msob9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gofrhbcai"/><path class="tpe_wnyve"/><path class="kr1msob9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:megaphone-48"} {...others} />);
}

export default Component;
