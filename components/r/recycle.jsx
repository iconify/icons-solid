import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xvhcfdc7w.css';
import '../../css/i/i9yds1bhx.css';
import '../../css/z/z3c37ob2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xvhcfdc7w"/><path class="i9yds1bhx wm-shadow"/><path class="z3c37ob2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:recycle"} {...others} />);
}

export default Component;
