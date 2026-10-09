import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpggqk6re.css';
import '../../css/e/e75wleedx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jpggqk6re"/><path class="e75wleedx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-48-bold"} {...others} />);
}

export default Component;
