import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdqqok9ep.css';
import '../../css/i/iazw9mnub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGExGR1bRm)"><path class="fdqqok9ep"/></g><defs><clipPath id="SVGExGR1bRm"><path class="iazw9mnub"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:star-square-fill"} {...others} />);
}

export default Component;
