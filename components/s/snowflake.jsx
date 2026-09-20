import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgq6vk-7r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zgq6vk-7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:snowflake"} {...others} />);
}

export default Component;
