import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbr_dz7cx.css';
import '../../css/q/q8pmglblu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kbr_dz7cx"/><path class="q8pmglblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkmark-filled"} {...others} />);
}

export default Component;
