import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k150lj2rb.css';
import '../../css/d/d9miz0bow.css';
import '../../css/u/uv_t56rtc.css';
import '../../css/a/avtix_bfo.css';
import '../../css/l/ls4_ncu6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k150lj2rb"/><path class="d9miz0bow"/><path class="uv_t56rtc"/><path class="avtix_bfo"/><path class="ls4_ncu6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:umbrella"} {...others} />);
}

export default Component;
