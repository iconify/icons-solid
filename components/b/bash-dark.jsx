import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/n/nlax2b63t.css';
import '../../css/p/pnar4pbjy.css';
import '../../css/x/x10p4zclm.css';
import '../../css/w/wqn2ksxdf.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="nlax2b63t"/><path clip-rule="evenodd" class="pnar4pbjy"/><path clip-rule="evenodd" class="x10p4zclm"/><path clip-rule="evenodd" class="wqn2ksxdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:bash-dark"} {...others} />);
}

export default Component;
