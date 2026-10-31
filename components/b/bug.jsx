import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gk26fvt2o.css';
import '../../css/n/nswfnbclt.css';
import '../../css/w/w8nste1qj.css';
import '../../css/i/izvj3goyw.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="gk26fvt2o"/><path class="nswfnbclt wm-shine"/><path class="w8nste1qj wm-k"/><path class="izvj3goyw wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bug"} {...others} />);
}

export default Component;
