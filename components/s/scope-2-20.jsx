import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcck3kbsm.css';
import '../../css/s/sarzorbyp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zcck3kbsm"/><path class="sarzorbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-2-20"} {...others} />);
}

export default Component;
