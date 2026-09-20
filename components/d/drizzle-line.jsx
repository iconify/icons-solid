import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_-5cwb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_-5cwb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:drizzle-line"} {...others} />);
}

export default Component;
