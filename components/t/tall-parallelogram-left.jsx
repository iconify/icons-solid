import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbps0obhz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qbps0obhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tall-parallelogram-left"} {...others} />);
}

export default Component;
