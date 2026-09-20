import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yssci-bbg.css';
import '../../css/i/igpj62s2p.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGDrELLdDM"><g class="ft5dv1b6b"><path class="yssci-bbg"/><path class="igpj62s2p"/></g></mask></defs><path mask="url(#SVGDrELLdDM)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sign-in-squre-duotone-line"} {...others} />);
}

export default Component;
