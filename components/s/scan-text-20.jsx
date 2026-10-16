import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdt8pcsop.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xdt8pcsop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scan-text-20"} {...others} />);
}

export default Component;
