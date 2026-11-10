import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbei61bae.css';
import '../../css/v/vai7imbuj.css';
import '../../css/s/s43s198-h.css';
import '../../css/v/vhxf3hhbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lbei61bae"/><path class="vai7imbuj"/><path class="s43s198-h"/><path class="vhxf3hhbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:closed-captioning-off"} {...others} />);
}

export default Component;
