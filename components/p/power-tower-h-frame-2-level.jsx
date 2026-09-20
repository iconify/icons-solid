import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwkxj401l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dwkxj401l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:power-tower-h-frame-2-level"} {...others} />);
}

export default Component;
