import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2gwobv4p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f2gwobv4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:womens-restroom-symbol"} {...others} />);
}

export default Component;
