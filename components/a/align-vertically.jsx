import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzjem1b0t.css';
import '../../css/i/i0cx1hkrq.css';
import '../../css/y/yr7gh2baf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 3.67 8.88)" class="uzjem1b0t"/><rect transform="matrix(0 1 1 0 3.67 8.88)" class="i0cx1hkrq"/><path class="yr7gh2baf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:align-vertically"} {...others} />);
}

export default Component;
