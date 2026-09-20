import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sawhoo83s.css';
import '../../css/v/vmmuxw06v.css';
import '../../css/p/p_qa8yb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sawhoo83s"/><path class="vmmuxw06v"/><path class="p_qa8yb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-thick-right-bottom-corner-3"} {...others} />);
}

export default Component;
