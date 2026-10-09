import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weojyq1pz.css';
import '../../css/x/xv0lvbb7k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="weojyq1pz"/><path class="xv0lvbb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gloves-48"} {...others} />);
}

export default Component;
