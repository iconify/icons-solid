import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx6gsqdoo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qx6gsqdoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:reorder-three-outline"} {...others} />);
}

export default Component;
