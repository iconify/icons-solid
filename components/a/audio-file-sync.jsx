import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uis8yybia.css';
import '../../css/n/npkdbjwnx.css';
import '../../css/x/xw9euxbui.css';
import '../../css/i/ir59wdbbe.css';
import '../../css/i/i0gngpb5h.css';
import '../../css/x/xi5lgl02v.css';
import '../../css/v/vzz5w_04z.css';
import '../../css/f/fnjuccbpx.css';
import '../../css/a/ahy07ybee.css';
import '../../css/k/k6d_1qbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uis8yybia"/><path class="npkdbjwnx"/><path class="xw9euxbui"/><path class="ir59wdbbe"/><path class="i0gngpb5h"/><path class="xi5lgl02v"/><path class="vzz5w_04z"/><path class="fnjuccbpx"/><path class="ahy07ybee"/><path class="k6d_1qbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:audio-file-sync"} {...others} />);
}

export default Component;
