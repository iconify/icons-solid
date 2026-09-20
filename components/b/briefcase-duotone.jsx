import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gn76a0bhm.css';
import '../../css/w/wsn7fvbhi.css';
import '../../css/k/kwdk_ccpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gn76a0bhm"/><path clip-rule="evenodd" class="wsn7fvbhi"/><path class="kwdk_ccpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:briefcase-duotone"} {...others} />);
}

export default Component;
