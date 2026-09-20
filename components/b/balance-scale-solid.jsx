import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-3desbsk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-3desbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:balance-scale-solid"} {...others} />);
}

export default Component;
