import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z4e8hzfxe.css';
import '../../css/k/k_jl23bmh.css';
import '../../css/v/vonc9acpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z4e8hzfxe"/><path class="k_jl23bmh"/><path class="vonc9acpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:server-edit"} {...others} />);
}

export default Component;
