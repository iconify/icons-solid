import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhx0_eg3c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hhx0_eg3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:huginn-dark"} {...others} />);
}

export default Component;
