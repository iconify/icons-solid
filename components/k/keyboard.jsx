import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg0dq4bxe.css';
import '../../css/n/ngz6222nx.css';
import '../../css/i/i2wbyxbqs.css';
import '../../css/l/lt5z9izav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.32 19.48)" class="sg0dq4bxe"/><rect transform="matrix(0 -1 -1 0 22.32 19.48)" class="ngz6222nx"/><path class="i2wbyxbqs"/><path class="lt5z9izav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard"} {...others} />);
}

export default Component;
