import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w006lobzc.css';
import '../../css/t/tx2rzib1i.css';
import '../../css/d/d-m49pkha.css';
import '../../css/x/xmfwdpb2z.css';
import '../../css/f/f75-xob9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w006lobzc"/><path class="tx2rzib1i"/><path class="d-m49pkha"/><path class="xmfwdpb2z"/><path class="f75-xob9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jupyter"} {...others} />);
}

export default Component;
