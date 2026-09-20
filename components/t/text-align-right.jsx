import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzm2_nzau.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pzm2_nzau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:text-align-right"} {...others} />);
}

export default Component;
