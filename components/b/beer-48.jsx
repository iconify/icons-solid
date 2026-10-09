import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk86n9brf.css';
import '../../css/x/xn-ip-jci.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bk86n9brf"/><path class="xn-ip-jci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beer-48"} {...others} />);
}

export default Component;
