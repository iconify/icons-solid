import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4-5bmdtc.css';
import '../../css/e/ei-x7jbxk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w4-5bmdtc"/><path class="ei-x7jbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terraced-house-20-bold"} {...others} />);
}

export default Component;
