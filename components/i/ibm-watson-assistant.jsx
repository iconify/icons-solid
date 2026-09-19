import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jck0vfbad.css';
import '../../css/u/u2p_6-b8n.css';
import '../../css/t/t74-6o1oe.css';
import '../../css/i/iuwke7bvt.css';
import '../../css/c/cq01zfbxb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jck0vfbad"/><circle class="u2p_6-b8n"/><circle class="t74-6o1oe"/><circle class="iuwke7bvt"/><path class="cq01zfbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-assistant"} {...others} />);
}

export default Component;
