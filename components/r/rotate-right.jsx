import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqs4gbbjk.css';

const viewBox = {"width":344,"height":432};
const content = `<path class="oqs4gbbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:rotate-right"} {...others} />);
}

export default Component;
