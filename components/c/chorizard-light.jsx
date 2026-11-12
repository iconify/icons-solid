import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azu-vgb0r.css';
import '../../css/l/lylvmeb0j.css';
import '../../css/r/rp7_rdbgh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="azu-vgb0r"/><path class="lylvmeb0j"/><path class="rp7_rdbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chorizard-light"} {...others} />);
}

export default Component;
