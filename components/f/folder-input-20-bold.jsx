import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k86i3-bfg.css';
import '../../css/s/sggm0biti.css';
import '../../css/n/nq52osbvr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k86i3-bfg"/><path class="sggm0biti"/><path class="nq52osbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-input-20-bold"} {...others} />);
}

export default Component;
