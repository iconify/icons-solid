import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr_c-4klg.css';
import '../../css/y/y73y0p4rq.css';
import '../../css/a/a4dfgjbai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rr_c-4klg"/><path class="y73y0p4rq"/><path class="a4dfgjbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:book-pencil"} {...others} />);
}

export default Component;
