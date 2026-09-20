import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9ds4ubva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o9ds4ubva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gl-inet-dark"} {...others} />);
}

export default Component;
