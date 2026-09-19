import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz71dbktw.css';
import '../../css/r/rytfiabwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vz71dbktw"/><path class="rytfiabwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:wikipedia"} {...others} />);
}

export default Component;
