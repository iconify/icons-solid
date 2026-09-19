import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn1iq6wxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gn1iq6wxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:grid"} {...others} />);
}

export default Component;
