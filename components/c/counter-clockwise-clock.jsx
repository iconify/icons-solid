import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulc_957tn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ulc_957tn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:counter-clockwise-clock"} {...others} />);
}

export default Component;
