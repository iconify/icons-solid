import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/i/ip2x5f3sx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="ip2x5f3sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-1-48"} {...others} />);
}

export default Component;
