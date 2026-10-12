import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4o7xmq6o.css';
import '../../css/m/m18t9iq3g.css';
import '../../css/h/hvwaqccxr.css';
import '../../css/q/qs52gjbsc.css';
import '../../css/p/ptedosd7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="f4o7xmq6o"/><circle transform="matrix(0 1 1 0 6.82 7.72)" class="m18t9iq3g"/><rect class="hvwaqccxr"/><path class="qs52gjbsc"/><path class="ptedosd7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:contacts"} {...others} />);
}

export default Component;
