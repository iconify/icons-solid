import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk6wy_3eo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tk6wy_3eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openprinting-cups-dark"} {...others} />);
}

export default Component;
