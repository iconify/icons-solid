import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g60a0jb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g60a0jb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-cog-outline"} {...others} />);
}

export default Component;
