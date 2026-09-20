import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3symwlop.css';
import '../../css/y/ypo2h9ruk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k3symwlop ouiIcon__fillSecondary"/><path class="ypo2h9ruk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-uptime"} {...others} />);
}

export default Component;
