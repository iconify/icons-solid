import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be-3goh7n.css';
import '../../css/d/do-2pcc7l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="be-3goh7n"/><path class="do-2pcc7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:street-light-48-bold"} {...others} />);
}

export default Component;
