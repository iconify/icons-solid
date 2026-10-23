import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g69ew-0ef.css';
import '../../css/y/y5y4rachd.css';
import '../../css/s/sbnczhbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g69ew-0ef"/><path class="y5y4rachd"/><circle transform="rotate(-90 18.32 4.84)" class="sbnczhbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-notification"} {...others} />);
}

export default Component;
