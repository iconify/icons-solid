import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nznz3mbbq.css';
import '../../css/c/c2bmh0bkk.css';
import '../../css/i/ig7og-50b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nznz3mbbq"/><path clip-rule="evenodd" class="c2bmh0bkk"/><path class="ig7og-50b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:explicit-filled"} {...others} />);
}

export default Component;
