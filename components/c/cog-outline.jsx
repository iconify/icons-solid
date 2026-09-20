import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kavpqk8gq.css';
import '../../css/b/btyv-wgod.css';
import '../../css/m/mxcp9pujd.css';

const viewBox = {"width":15,"height":15};
const content = `<g clip-rule="evenodd" class="kavpqk8gq"><path class="btyv-wgod"/><path class="mxcp9pujd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:cog-outline"} {...others} />);
}

export default Component;
