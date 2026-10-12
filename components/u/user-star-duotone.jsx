import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/naysjv-ce.css';
import '../../css/g/g-mtj-z5m.css';
import '../../css/i/iqtg16bzl.css';
import '../../css/s/skp8tjssj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="naysjv-ce"/><path class="g-mtj-z5m"/><path class="iqtg16bzl"/><path class="skp8tjssj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-star-duotone"} {...others} />);
}

export default Component;
