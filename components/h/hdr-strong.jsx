import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub6p_vdiw.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="ub6p_vdiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:hdr-strong"} {...others} />);
}

export default Component;
