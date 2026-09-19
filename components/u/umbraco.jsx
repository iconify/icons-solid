import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez5cvnbdp.css';

const viewBox = {"width":510,"height":512};
const content = `<path class="ez5cvnbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:umbraco"} {...others} />);
}

export default Component;
