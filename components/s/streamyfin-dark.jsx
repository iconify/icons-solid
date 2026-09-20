import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu46yu7sj.css';
import '../../css/d/dk68j6z_t.css';
import '../../css/t/tjav81vfv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mu46yu7sj"/><path class="dk68j6z_t"/><path class="tjav81vfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamyfin-dark"} {...others} />);
}

export default Component;
