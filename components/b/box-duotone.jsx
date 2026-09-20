import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j19d1tb1x.css';
import '../../css/b/bamoiilsm.css';
import '../../css/g/glthabcxl.css';
import '../../css/q/q77z3bzcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j19d1tb1x"/><path class="bamoiilsm"/><path class="glthabcxl"/><path class="q77z3bzcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-duotone"} {...others} />);
}

export default Component;
