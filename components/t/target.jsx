import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydydfacji.css';
import '../../css/r/r6b5alswy.css';
import '../../css/g/gs9iqtbje.css';
import '../../css/s/ssly1wxks.css';
import '../../css/e/e3hcn1iyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ydydfacji"/><path class="r6b5alswy"/><path class="gs9iqtbje"/><path class="ssly1wxks"/><path class="e3hcn1iyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:target"} {...others} />);
}

export default Component;
