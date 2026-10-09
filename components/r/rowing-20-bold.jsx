import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqqbf4jvf.css';
import '../../css/f/flpc-e6db.css';
import '../../css/e/e6txgee1e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zqqbf4jvf"/><path class="flpc-e6db"/><path class="e6txgee1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rowing-20-bold"} {...others} />);
}

export default Component;
