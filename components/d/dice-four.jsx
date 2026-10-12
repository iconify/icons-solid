import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftnjez00z.css';
import '../../css/z/zp8fjxjrj.css';
import '../../css/q/qpfdhebun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="ftnjez00z"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/><path class="qpfdhebun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dice-four"} {...others} />);
}

export default Component;
