import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-ev1iyet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-ev1iyet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:land-plots-circle"} {...others} />);
}

export default Component;
