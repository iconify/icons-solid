import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dayaw-b9i.css';

const viewBox = {"width":77,"height":614};
const content = `<path class="dayaw-b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:periodcentered"} {...others} />);
}

export default Component;
