import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyvnanrur.css';
import '../../css/n/nk5v6ac6d.css';
import '../../css/p/pkdbtxbsn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyvnanrur"/><path class="nk5v6ac6d"/><path class="pkdbtxbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-48-bold"} {...others} />);
}

export default Component;
