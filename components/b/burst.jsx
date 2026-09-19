import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0i0_d7-r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="v0i0_d7-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:burst"} {...others} />);
}

export default Component;
