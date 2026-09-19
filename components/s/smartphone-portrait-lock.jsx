import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke6k-nk_c.css';

const viewBox = {"width":304,"height":480};
const content = `<path class="ke6k-nk_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:smartphone-portrait-lock"} {...others} />);
}

export default Component;
