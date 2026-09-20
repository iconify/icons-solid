import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd1f1ab4o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kd1f1ab4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:snowflake-and-icicles"} {...others} />);
}

export default Component;
