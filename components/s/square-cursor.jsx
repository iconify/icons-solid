import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx2n8gkrd.css';
import '../../css/n/ntlu6hbsr.css';
import '../../css/x/xtkya24ha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dx2n8gkrd"/><path class="ntlu6hbsr"/><path class="xtkya24ha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square-cursor"} {...others} />);
}

export default Component;
