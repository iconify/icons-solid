import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfmy84bkp.css';
import '../../css/r/rgmiyo8xl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pfmy84bkp"/><path class="rgmiyo8xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-knife-48-bold"} {...others} />);
}

export default Component;
