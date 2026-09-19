import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9d51b_-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v9d51b_-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:snowflake-1"} {...others} />);
}

export default Component;
