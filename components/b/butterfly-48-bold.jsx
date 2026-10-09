import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkze5mbgn.css';
import '../../css/v/vkaih402o.css';
import '../../css/w/wqgk4rban.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kkze5mbgn"/><path class="vkaih402o"/><path class="wqgk4rban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-48-bold"} {...others} />);
}

export default Component;
