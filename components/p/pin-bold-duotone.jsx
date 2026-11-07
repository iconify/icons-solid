import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nstr2nbrd.css';
import '../../css/m/m4_d5pj1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nstr2nbrd"/><path class="m4_d5pj1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-bold-duotone"} {...others} />);
}

export default Component;
