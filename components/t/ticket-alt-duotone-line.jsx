import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gv7df2j7x.css';
import '../../css/z/zfqr1nk8b.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGWERm2vsw"><g class="ft5dv1b6b"><path class="gv7df2j7x"/><path class="zfqr1nk8b"/></g></mask></defs><path mask="url(#SVGWERm2vsw)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket-alt-duotone-line"} {...others} />);
}

export default Component;
