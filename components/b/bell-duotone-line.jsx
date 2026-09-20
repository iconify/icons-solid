import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acs7iwixh.css';
import '../../css/n/n8sfv5b_b.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNvrGqb2w"><g class="ft5dv1b6b"><path class="acs7iwixh"/><path class="n8sfv5b_b"/></g></mask></defs><path mask="url(#SVGNvrGqb2w)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bell-duotone-line"} {...others} />);
}

export default Component;
