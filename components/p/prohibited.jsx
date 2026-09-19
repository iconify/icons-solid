import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7-j0_rby.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="m7-j0_rby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:prohibited"} {...others} />);
}

export default Component;
