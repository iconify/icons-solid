import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwrbzjb5e.css';
import '../../css/a/aoxrtp9nb.css';
import '../../css/i/ib0shfeph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gwrbzjb5e"/><path class="aoxrtp9nb"/><path class="ib0shfeph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:egg-crack"} {...others} />);
}

export default Component;
