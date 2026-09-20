import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztznpjbdp.css';
import '../../css/q/qo1nakb9i.css';
import '../../css/h/htfsjpb9r.css';
import '../../css/e/emv-fpbxm.css';
import '../../css/f/fcbfp7bko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ztznpjbdp"/><path class="qo1nakb9i"/><path class="htfsjpb9r"/><path class="emv-fpbxm"/><path class="fcbfp7bko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
