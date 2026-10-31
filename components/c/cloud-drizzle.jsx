import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v1orcgblb.css';
import '../../css/o/omwmftqpt.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/q/q6qhexbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v1orcgblb wm-shadow"/><path class="omwmftqpt wm-shadow"/><path class="n1y1i5mpe"/><path class="q6qhexbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-drizzle"} {...others} />);
}

export default Component;
