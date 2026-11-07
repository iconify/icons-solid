import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/saeh39c6l.css';
import '../../css/n/n7_fvpbed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="saeh39c6l"/><path class="n7_fvpbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brackets-linear"} {...others} />);
}

export default Component;
