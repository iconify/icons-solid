import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znpfaumql.css';
import '../../css/a/ade9yibvi.css';
import '../../css/l/leyr59bsa.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="znpfaumql"/><path class="ade9yibvi"/><path class="leyr59bsa"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volume-circle"} {...others} />);
}

export default Component;
