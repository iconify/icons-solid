import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9jb7kaqf.css';
import '../../css/j/jimnbhblw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m9jb7kaqf"/><path class="jimnbhblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switchgear-48"} {...others} />);
}

export default Component;
