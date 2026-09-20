import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpyw0o4_q.css';
import '../../css/d/d8af_jbct.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGmFUv3dVk" class="vpyw0o4_q"/></defs><use href="#SVGmFUv3dVk" class="d8af_jbct"/><use href="#SVGmFUv3dVk" class="d8af_jbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:github-line"} {...others} />);
}

export default Component;
