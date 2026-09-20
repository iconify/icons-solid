import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gza2rb70b.css';
import '../../css/z/zz2o6wb4l.css';
import '../../css/y/ylo_e9tjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gza2rb70b"/><path class="zz2o6wb4l"/><path class="ylo_e9tjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart-large3-duotone"} {...others} />);
}

export default Component;
