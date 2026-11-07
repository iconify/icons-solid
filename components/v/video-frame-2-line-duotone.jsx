import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ji_1lwb7y.css';
import '../../css/v/v71dgib_d.css';
import '../../css/g/gzp2zubus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ji_1lwb7y"/><path class="v71dgib_d"/><path class="gzp2zubus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-2-line-duotone"} {...others} />);
}

export default Component;
