import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjw2pb06u.css';
import '../../css/e/e55pc6bqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mjw2pb06u"/><path class="e55pc6bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earthquake-48-bold"} {...others} />);
}

export default Component;
