import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_k8itbaf.css';
import '../../css/h/hbhcawbze.css';
import '../../css/i/i4oj8jbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z_k8itbaf"/><path class="hbhcawbze"/><path class="i4oj8jbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:volume-x-duotone"} {...others} />);
}

export default Component;
