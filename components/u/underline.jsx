import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl7hvkm3n.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vl7hvkm3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:underline"} {...others} />);
}

export default Component;
