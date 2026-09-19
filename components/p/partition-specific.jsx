import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9l0rm1ir.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x9l0rm1ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:partition-specific"} {...others} />);
}

export default Component;
