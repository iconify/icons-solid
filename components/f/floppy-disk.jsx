import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw53_rx6z.css';
import '../../css/w/w32jeb4uj.css';
import '../../css/f/f3kl78hjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xw53_rx6z"/><path class="w32jeb4uj"/><path class="f3kl78hjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:floppy-disk"} {...others} />);
}

export default Component;
