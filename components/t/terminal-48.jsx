import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9weu6t_z.css';
import '../../css/l/li0btfuqu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e9weu6t_z"/><path class="li0btfuqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terminal-48"} {...others} />);
}

export default Component;
