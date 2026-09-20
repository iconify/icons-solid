import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brx7nk65y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="brx7nk65y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:food-weiner"} {...others} />);
}

export default Component;
