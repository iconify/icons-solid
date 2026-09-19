import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1wnbiriq.css';
import '../../css/c/cmgycubke.css';
import '../../css/f/f4khvma_r.css';
import '../../css/l/lzo6wlb2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j1wnbiriq"/><path class="cmgycubke"/><ellipse class="f4khvma_r"/><path class="lzo6wlb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:policecarsrevolvinglight"} {...others} />);
}

export default Component;
