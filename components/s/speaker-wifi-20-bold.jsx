import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb8q1pmkh.css';
import '../../css/s/suvwyfb8m.css';
import '../../css/v/v57n--bcr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nb8q1pmkh"/><path class="suvwyfb8m"/><path class="v57n--bcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-wifi-20-bold"} {...others} />);
}

export default Component;
