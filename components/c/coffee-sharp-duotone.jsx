import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fiqwvobaq.css';
import '../../css/f/fckq11bbx.css';
import '../../css/g/go6zdtbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="fiqwvobaq"/><path clip-rule="evenodd" class="fckq11bbx"/><path class="go6zdtbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coffee-sharp-duotone"} {...others} />);
}

export default Component;
