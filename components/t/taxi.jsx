import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwjjx3bfe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fwjjx3bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:taxi"} {...others} />);
}

export default Component;
