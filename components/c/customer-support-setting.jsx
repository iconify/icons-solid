import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wkrjssbar.css';
import '../../css/u/u1o373u-g.css';
import '../../css/c/cuxp3pbhc.css';
import '../../css/v/vlb3yfblk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wkrjssbar"/><path class="u1o373u-g"/><path class="cuxp3pbhc"/><path class="vlb3yfblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:customer-support-setting"} {...others} />);
}

export default Component;
