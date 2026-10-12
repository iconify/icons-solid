import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pxkklfxth.css';
import '../../css/u/uzm3_fbfh.css';
import '../../css/a/a2wio1sog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pxkklfxth"/><path class="uzm3_fbfh"/><path class="a2wio1sog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scan-eye-duotone"} {...others} />);
}

export default Component;
