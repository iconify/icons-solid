import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g2oa2nvff.css';
import '../../css/r/r2x4fvb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g2oa2nvff"/><path class="r2x4fvb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:email-opened"} {...others} />);
}

export default Component;
