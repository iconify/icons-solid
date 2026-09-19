import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tatiy3bwz.css';
import '../../css/o/oqknzwbkc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tatiy3bwz"/><path class="oqknzwbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pricing-container"} {...others} />);
}

export default Component;
