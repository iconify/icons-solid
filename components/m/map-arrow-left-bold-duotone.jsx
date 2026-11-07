import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a553rmbqh.css';
import '../../css/g/ga-aabcqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a553rmbqh"/><path class="ga-aabcqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
