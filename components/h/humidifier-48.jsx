import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/naqry0ggt.css';
import '../../css/o/olslqwbim.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="naqry0ggt"/><path class="olslqwbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidifier-48"} {...others} />);
}

export default Component;
