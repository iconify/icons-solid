import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkhfd4j4e.css';
import '../../css/t/t2go5ivjc.css';
import '../../css/k/k9_6kwbvw.css';
import '../../css/b/bsrzfwwmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k zkhfd4j4e"/><path class="t2go5ivjc wm-k"/><path class="k9_6kwbvw wm-a"/><path class="bsrzfwwmh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cpu"} {...others} />);
}

export default Component;
