import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epgk7ub8d.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="epgk7ub8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:cogs"} {...others} />);
}

export default Component;
