import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybzb3qb6q.css';

const viewBox = {"width":896,"height":896};
const content = `<path class="ybzb3qb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circleloaderempty"} {...others} />);
}

export default Component;
