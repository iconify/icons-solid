import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_m8x9bte.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="x_m8x9bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:impactstory-square"} {...others} />);
}

export default Component;
