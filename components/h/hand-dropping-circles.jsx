import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m68fv6b_p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m68fv6b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hand-dropping-circles"} {...others} />);
}

export default Component;
