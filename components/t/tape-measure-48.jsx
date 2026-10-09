import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow6zdh7dh.css';
import '../../css/m/m0tcvtbkn.css';
import '../../css/g/g179ywr-m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ow6zdh7dh"/><path class="m0tcvtbkn"/><path class="g179ywr-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tape-measure-48"} {...others} />);
}

export default Component;
