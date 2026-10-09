import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok-0u49zj.css';
import '../../css/w/wh24nx91b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ok-0u49zj"/><path class="wh24nx91b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-bolt-48-bold"} {...others} />);
}

export default Component;
