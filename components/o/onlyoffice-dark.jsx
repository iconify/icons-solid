import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk16tac8i.css';
import '../../css/h/hnr6sxbeb.css';
import '../../css/i/i9ou5abuk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vk16tac8i"/><path class="hnr6sxbeb"/><path class="i9ou5abuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onlyoffice-dark"} {...others} />);
}

export default Component;
