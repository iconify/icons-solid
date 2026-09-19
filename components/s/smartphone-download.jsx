import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz6l9nihz.css';

const viewBox = {"width":304,"height":480};
const content = `<path class="tz6l9nihz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:smartphone-download"} {...others} />);
}

export default Component;
