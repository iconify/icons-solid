import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_8ak0wuc.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="u_8ak0wuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:acm-square"} {...others} />);
}

export default Component;
