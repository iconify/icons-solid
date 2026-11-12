import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpazd_-xr.css';
import '../../css/t/tnu5vf6mi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bpazd_-xr"/><path class="tnu5vf6mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onetime-secret"} {...others} />);
}

export default Component;
