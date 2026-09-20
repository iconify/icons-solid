import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulg-h6bzb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ulg-h6bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:human-on-ferry"} {...others} />);
}

export default Component;
