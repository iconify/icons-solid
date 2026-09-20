import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc_n5ab0n.css';
import '../../css/s/sjdbitpfe.css';
import '../../css/p/pz2pvccnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rc_n5ab0n"/><path class="sjdbitpfe"/><path class="pz2pvccnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:content-write"} {...others} />);
}

export default Component;
