import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvt6i0b8a.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="pvt6i0b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-alt-waxing-gibbous-4"} {...others} />);
}

export default Component;
