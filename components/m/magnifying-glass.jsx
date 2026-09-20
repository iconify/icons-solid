import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc0ef1bqm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uc0ef1bqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:magnifying-glass"} {...others} />);
}

export default Component;
