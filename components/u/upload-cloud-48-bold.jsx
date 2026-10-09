import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk_olrbkj.css';
import '../../css/w/wkqj1nbqz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sk_olrbkj"/><path class="wkqj1nbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:upload-cloud-48-bold"} {...others} />);
}

export default Component;
