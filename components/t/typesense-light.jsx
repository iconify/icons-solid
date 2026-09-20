import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfv2j2qkp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xfv2j2qkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typesense-light"} {...others} />);
}

export default Component;
