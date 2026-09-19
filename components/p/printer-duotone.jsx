import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p12dhibmp.css';
import '../../css/m/mdhqcyvse.css';
import '../../css/g/g2ef58b-q.css';
import '../../css/i/ik193tb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p12dhibmp"/><path class="mdhqcyvse"/><path class="g2ef58b-q"/><path class="ik193tb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:printer-duotone"} {...others} />);
}

export default Component;
