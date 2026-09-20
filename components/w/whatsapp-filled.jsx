import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca0ca5k1s.css';
import '../../css/d/d9v1t7v0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG2EtlbetS)"><path class="ca0ca5k1s"/></g><defs><clipPath id="SVG2EtlbetS"><path class="d9v1t7v0a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:whatsapp-filled"} {...others} />);
}

export default Component;
