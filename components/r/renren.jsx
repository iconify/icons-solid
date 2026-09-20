import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5bgf6b_u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j5bgf6b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:renren"} {...others} />);
}

export default Component;
