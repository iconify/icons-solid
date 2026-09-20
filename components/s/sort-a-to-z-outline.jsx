import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it6_3nsgg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="it6_3nsgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:sort-a-to-z-outline"} {...others} />);
}

export default Component;
