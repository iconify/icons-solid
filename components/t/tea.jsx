import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvzrhymp.css';
import '../../css/n/n-lsx4-9n.css';
import '../../css/l/lkvl4_b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rjvzrhymp"/><path class="n-lsx4-9n"/><path class="lkvl4_b1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tea"} {...others} />);
}

export default Component;
