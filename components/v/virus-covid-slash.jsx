import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uooe_ab7h.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="uooe_ab7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:virus-covid-slash"} {...others} />);
}

export default Component;
