import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytsqaqbxb.css';
import '../../css/y/y4cyulhsa.css';
import '../../css/s/snt_cnzej.css';
import '../../css/v/vu2rk5hjo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ytsqaqbxb"/><circle class="y4cyulhsa"/><path class="snt_cnzej"/><path class="vu2rk5hjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-medal"} {...others} />);
}

export default Component;
