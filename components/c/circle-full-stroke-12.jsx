import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4i59nbxe.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="l4i59nbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:circle-full-stroke-12"} {...others} />);
}

export default Component;
