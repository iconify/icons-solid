import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb0t6_b-j.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cb0t6_b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-lg-stroke-12"} {...others} />);
}

export default Component;
