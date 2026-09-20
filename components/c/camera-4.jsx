import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kluuahbzr.css';
import '../../css/l/lq1mbqb5s.css';
import '../../css/x/x8-9m0bqm.css';
import '../../css/m/myv1zebet.css';
import '../../css/p/p54s3gbox.css';
import '../../css/i/in6b0f2av.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kluuahbzr"/><path class="lq1mbqb5s"/><path class="x8-9m0bqm"/><path class="myv1zebet"/><path class="p54s3gbox"/><path class="in6b0f2av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-4"} {...others} />);
}

export default Component;
