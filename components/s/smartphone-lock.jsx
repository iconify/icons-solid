import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekn05fbpx.css';

const viewBox = {"width":368,"height":480};
const content = `<path class="ekn05fbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:smartphone-lock"} {...others} />);
}

export default Component;
