import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-u1sk9yu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n-u1sk9yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:drizzle-orm"} {...others} />);
}

export default Component;
