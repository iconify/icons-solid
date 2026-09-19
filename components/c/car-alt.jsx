import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipgh2pb5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ipgh2pb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:car-alt"} {...others} />);
}

export default Component;
