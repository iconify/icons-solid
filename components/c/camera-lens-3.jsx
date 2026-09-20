import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smgkjcctl.css';
import '../../css/p/p7ral5b5o.css';
import '../../css/o/op9t8rroq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="smgkjcctl"/><path class="p7ral5b5o"/><path class="op9t8rroq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-lens-3"} {...others} />);
}

export default Component;
