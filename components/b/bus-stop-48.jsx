import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8aavvbfy.css';
import '../../css/g/ga25m-gng.css';
import '../../css/z/zgolj6bns.css';
import '../../css/w/w9hxef2ad.css';
import '../../css/p/pwrb__blp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h8aavvbfy"/><path class="ga25m-gng"/><path class="zgolj6bns"/><path class="w9hxef2ad"/><path class="pwrb__blp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-stop-48"} {...others} />);
}

export default Component;
