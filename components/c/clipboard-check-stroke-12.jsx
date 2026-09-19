import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1w90i-5m.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="m1w90i-5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clipboard-check-stroke-12"} {...others} />);
}

export default Component;
