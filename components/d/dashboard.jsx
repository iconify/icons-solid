import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6c3wgbye.css';
import '../../css/e/euf2p35ep.css';
import '../../css/z/znk7n2t-o.css';
import '../../css/g/gw7af6bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="o6c3wgbye"/><rect transform="rotate(-90 2.01 9)" class="euf2p35ep"/><rect class="znk7n2t-o"/><path class="gw7af6bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dashboard"} {...others} />);
}

export default Component;
