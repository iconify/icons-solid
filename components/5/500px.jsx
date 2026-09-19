import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/varkwtfpn.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="varkwtfpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:500px"} {...others} />);
}

export default Component;
