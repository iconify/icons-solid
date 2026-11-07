import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co0iqo8wk.css';
import '../../css/g/gcopb3ilo.css';
import '../../css/k/k4fizwbwr.css';
import '../../css/q/qv6-upvsv.css';
import '../../css/y/yv_ow6bdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="co0iqo8wk"/><path class="gcopb3ilo"/><path class="k4fizwbwr"/><path class="qv6-upvsv"/><path class="yv_ow6bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-bold"} {...others} />);
}

export default Component;
