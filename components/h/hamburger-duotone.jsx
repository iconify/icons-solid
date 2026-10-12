import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3y_v82fv.css';
import '../../css/n/nfz4ezbek.css';
import '../../css/r/r-r1vybtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j3y_v82fv"/><path class="nfz4ezbek"/><path class="r-r1vybtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hamburger-duotone"} {...others} />);
}

export default Component;
