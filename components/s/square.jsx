import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftnjez00z.css';
import '../../css/z/zp8fjxjrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="matrix(0 -1 -1 0 21.4 21.4)" class="ft5dv1b6b"><rect class="ftnjez00z"/><rect class="zp8fjxjrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square"} {...others} />);
}

export default Component;
