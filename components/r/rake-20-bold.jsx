import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k--qs-afs.css';
import '../../css/w/wtt-7nbfn.css';
import '../../css/f/fzdecdctz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k--qs-afs"/><path class="wtt-7nbfn"/><path class="fzdecdctz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rake-20-bold"} {...others} />);
}

export default Component;
