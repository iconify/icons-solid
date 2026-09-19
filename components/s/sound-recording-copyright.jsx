import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynhhlqb6o.css';
import '../../css/k/kkl6jsbqo.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="ynhhlqb6o"/><path class="kkl6jsbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:sound-recording-copyright"} {...others} />);
}

export default Component;
