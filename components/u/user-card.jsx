import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3k912bsd.css';
import '../../css/g/gw9udg05y.css';
import '../../css/g/g-0nn5b0c.css';
import '../../css/w/wg70jprhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o3k912bsd"/><rect transform="matrix(0 -1 -1 0 22.29 19.19)" class="gw9udg05y"/><path class="g-0nn5b0c"/><path class="wg70jprhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-card"} {...others} />);
}

export default Component;
