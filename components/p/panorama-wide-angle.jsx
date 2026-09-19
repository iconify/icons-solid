import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi_in7rna.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="fi_in7rna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:panorama-wide-angle"} {...others} />);
}

export default Component;
