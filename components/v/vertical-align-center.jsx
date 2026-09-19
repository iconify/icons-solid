import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwi9b4iau.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwi9b4iau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:vertical-align-center"} {...others} />);
}

export default Component;
