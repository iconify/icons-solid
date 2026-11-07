import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crvqngn_d.css';
import '../../css/b/bpnbo6b_t.css';
import '../../css/e/ezp-_fbbx.css';
import '../../css/q/q38813opj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crvqngn_d"/><path class="bpnbo6b_t"/><path clip-rule="evenodd" class="ezp-_fbbx"/><path clip-rule="evenodd" class="q38813opj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-bold"} {...others} />);
}

export default Component;
