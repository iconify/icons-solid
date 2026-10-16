import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah3zxz6rp.css';
import '../../css/h/h_kmv8b8b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ah3zxz6rp"/><path class="h_kmv8b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chain-48"} {...others} />);
}

export default Component;
