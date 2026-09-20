import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmn2cib0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hmn2cib0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:trend-downward"} {...others} />);
}

export default Component;
