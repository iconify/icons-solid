import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm-2geb9q.css';
import '../../css/n/n33vuzbdr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mm-2geb9q"/><path class="n33vuzbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dam-48"} {...others} />);
}

export default Component;
