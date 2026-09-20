import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g626xxb-k.css';
import '../../css/y/y3jhmd2ah.css';
import '../../css/e/e6bz15b5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g626xxb-k"/><path class="y3jhmd2ah"/><path class="e6bz15b5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-close-broken"} {...others} />);
}

export default Component;
