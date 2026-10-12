import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9iiohb0l.css';
import '../../css/s/sl9eks9ly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o9iiohb0l"/><path class="sl9eks9ly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pilcrow"} {...others} />);
}

export default Component;
