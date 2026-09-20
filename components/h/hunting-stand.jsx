import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy0mtp5eg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fy0mtp5eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hunting-stand"} {...others} />);
}

export default Component;
