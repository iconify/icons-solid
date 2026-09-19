import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m82ulsb7p.css';
import '../../css/q/q_8nafb3u.css';
import '../../css/u/ufkv7lbjl.css';
import '../../css/c/cwaouvdkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m82ulsb7p"/><path class="q_8nafb3u"/><path class="ufkv7lbjl"/><path class="cwaouvdkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:horiz-distribution-left-solid"} {...others} />);
}

export default Component;
