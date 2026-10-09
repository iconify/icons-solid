import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xagjmlbpr.css';
import '../../css/x/xtdm6g52u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xagjmlbpr"/><path class="xtdm6g52u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-nacs-48"} {...others} />);
}

export default Component;
