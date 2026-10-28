import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5hcmwljm.css';
import '../../css/e/ehwh-9vbt.css';
import '../../css/z/zyag_hb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n5hcmwljm"/><path class="ehwh-9vbt"/><path class="zyag_hb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:door-in"} {...others} />);
}

export default Component;
