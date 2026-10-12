import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5i-ymejz.css';
import '../../css/x/xgar21b2f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i5i-ymejz"/><path class="xgar21b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hurricane-48"} {...others} />);
}

export default Component;
