import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpozj2bwc.css';
import '../../css/y/yvr-6_iby.css';
import '../../css/o/odt3z9bir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cpozj2bwc"/><path class="yvr-6_iby"/><path class="odt3z9bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:heart-cupid"} {...others} />);
}

export default Component;
