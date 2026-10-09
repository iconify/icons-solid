import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pouv5lbnl.css';
import '../../css/q/qqjnhll6v.css';
import '../../css/e/efnr8lb3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pouv5lbnl"/><path class="qqjnhll6v"/><path class="efnr8lb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:belt-drive-48"} {...others} />);
}

export default Component;
