import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw9-n0btc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vw9-n0btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-with-taxi-checkerboard"} {...others} />);
}

export default Component;
