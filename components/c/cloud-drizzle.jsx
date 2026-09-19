import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efv6cdc0q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="efv6cdc0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cloud-drizzle"} {...others} />);
}

export default Component;
