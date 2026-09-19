import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck8_mw97s.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="ck8_mw97s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:house-chimney-medical"} {...others} />);
}

export default Component;
