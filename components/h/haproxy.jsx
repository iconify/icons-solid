import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kievrdbdp.css';
import '../../css/n/nstbe3bzr.css';
import '../../css/u/uln8bqb4e.css';
import '../../css/z/z0qdkwbtn.css';
import '../../css/i/ip9tdh1yx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kievrdbdp"/><path class="nstbe3bzr"/><path class="uln8bqb4e"/><path class="z0qdkwbtn"/><path class="ip9tdh1yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haproxy"} {...others} />);
}

export default Component;
