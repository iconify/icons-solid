import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq5m95a3i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mq5m95a3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:house-and-industrial-building-and-lowrise-building"} {...others} />);
}

export default Component;
