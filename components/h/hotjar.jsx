import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmp8_bcja.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vmp8_bcja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:hotjar"} {...others} />);
}

export default Component;
