import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs4ym0b3p.css';
import '../../css/d/dp1f6j7dg.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="bs4ym0b3p"/><path class="dp1f6j7dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:remove-1y"} {...others} />);
}

export default Component;
