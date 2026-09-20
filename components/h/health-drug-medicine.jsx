import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4hh0wb3i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x4hh0wb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-drug-medicine"} {...others} />);
}

export default Component;
