import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4lc6l5aa.css';
import '../../css/m/mixfjwdxi.css';
import '../../css/t/t9o__94ye.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t4lc6l5aa"/><path class="mixfjwdxi"/><path class="t9o__94ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compost-20"} {...others} />);
}

export default Component;
