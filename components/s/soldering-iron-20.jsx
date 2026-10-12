import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twyecdg0k.css';
import '../../css/t/tzg0a7gil.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="twyecdg0k"/><path class="tzg0a7gil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soldering-iron-20"} {...others} />);
}

export default Component;
