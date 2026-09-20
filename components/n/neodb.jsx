import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xik-vs_jl.css';
import '../../css/o/owdhvpbwp.css';
import '../../css/k/kt2xtwbum.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xik-vs_jl"/><path class="owdhvpbwp"/><path class="kt2xtwbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:neodb"} {...others} />);
}

export default Component;
