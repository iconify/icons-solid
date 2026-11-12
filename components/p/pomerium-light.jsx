import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrcqh2b6o.css';
import '../../css/x/xw_9y5bzo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hrcqh2b6o"/><path class="xw_9y5bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pomerium-light"} {...others} />);
}

export default Component;
