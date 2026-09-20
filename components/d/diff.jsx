import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy9o_fwfy.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vy9o_fwfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:diff"} {...others} />);
}

export default Component;
