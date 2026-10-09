import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qww9sz6vc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qww9sz6vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:infinity-48-bold"} {...others} />);
}

export default Component;
