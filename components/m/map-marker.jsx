import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvi3j2b2c.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="uvi3j2b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:map-marker"} {...others} />);
}

export default Component;
