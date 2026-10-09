import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jukv1_4-a.css';
import '../../css/x/xoemm8bwf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jukv1_4-a"/><path class="xoemm8bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-container-48-bold"} {...others} />);
}

export default Component;
