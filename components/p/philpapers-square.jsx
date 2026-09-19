import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns0ymobwz.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ns0ymobwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:philpapers-square"} {...others} />);
}

export default Component;
